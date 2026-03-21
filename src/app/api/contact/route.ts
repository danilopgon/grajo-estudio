import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio.').max(100),
  email: z.email('Email no válido.').max(200),
  asunto: z.string().min(1, 'Cuéntanos qué necesitas.').max(200),
  mensaje: z.string().min(1, 'Añade un mensaje, por favor.').max(2000),
})

/** Escape HTML special characters to prevent XSS in email body */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function POST(req: NextRequest) {
  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const first = parsed.error.issues[0]
    return NextResponse.json(
      { error: first?.message ?? 'Datos no válidos.', field: first?.path?.[0] ?? null },
      { status: 422 }
    )
  }

  const { nombre, email, asunto, mensaje } = parsed.data

  try {
    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"Grajo Estudio Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? process.env.SMTP_USER,
      replyTo: `"${nombre}" <${email}>`,
      subject: asunto ? `[Web] ${asunto}` : `[Web] Nuevo mensaje de ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        asunto ? `Asunto: ${asunto}` : '',
        '',
        mensaje ?? '(sin mensaje)',
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #3D3229;">Nuevo mensaje desde grajoestudio.com</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #5C4D3C; font-weight: 600;">Nombre</td><td>${esc(nombre)}</td></tr>
            <tr><td style="padding: 8px 0; color: #5C4D3C; font-weight: 600;">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
            ${asunto ? `<tr><td style="padding: 8px 0; color: #5C4D3C; font-weight: 600;">Asunto</td><td>${esc(asunto)}</td></tr>` : ''}
          </table>
          ${mensaje ? `<div style="margin-top: 1.5rem; padding: 1rem; background: #F5EDE3; border-radius: 8px; color: #3D3229;">${esc(mensaje).replace(/\n/g, '<br>')}</div>` : ''}
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] nodemailer error:', err)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
