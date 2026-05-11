'use client'

import { type FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'

type Status = 'idle' | 'loading' | 'success' | 'error'
type FieldErrors = Partial<Record<'nombre' | 'email' | 'asunto' | 'mensaje', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contacto() {
  const [status, setStatus] = useState<Status>('idle')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError('')

    const form = e.currentTarget
    const data = {
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      asunto: (form.elements.namedItem('asunto') as HTMLInputElement).value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value,
    }

    // Client-side validation
    const errors: FieldErrors = {}
    if (!data.nombre.trim()) errors.nombre = 'El nombre es obligatorio.'
    if (!data.email.trim()) errors.email = 'El email es obligatorio.'
    else if (!EMAIL_RE.test(data.email)) errors.email = 'Introduce un email válido.'
    if (!data.asunto.trim()) errors.asunto = 'Cuéntanos qué necesitas.'
    if (!data.mensaje.trim()) errors.mensaje = 'Añade un mensaje, por favor.'

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        // Map server field error back to per-field display if possible
        if (json.field && typeof json.field === 'string') {
          setFieldErrors({ [json.field]: json.error ?? 'Error desconocido.' })
          setStatus('idle')
        } else {
          setFormError(json.error ?? 'Error desconocido.')
          setStatus('error')
        }
        return
      }

      setStatus('success')
    } catch {
      setFormError('Error de red. Comprueba tu conexión e inténtalo de nuevo.')
      setStatus('error')
    }
  }

  function clearFieldError(field: keyof FieldErrors) {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => { const next = { ...prev }; delete next[field]; return next })
    }
  }

  return (
    <section
      id="contacto"
      className="mt-[-1px] rounded-t-[var(--radius)] bg-earth py-[clamp(4rem,8vh,7rem)] text-cream"
      aria-labelledby="contacto-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] items-start md:grid-cols-2">

          {/* Info */}
          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
              Contacto
            </span>
            <h2
              id="contacto-heading"
              className="mb-4 font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-cream"
            >
              ¿Tienes algo<br />
              entre manos?{' '}
              <em className="not-italic text-orange-soft">Hablemos.</em>
            </h2>
            <p className="mb-8 max-w-[400px] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-cream/70">
              Sin formularios interminables. Sin jerga. Solo una conversación sobre lo que necesitas.
            </p>

            <a
              href="mailto:hola@grajoestudio.com"
              className="flex items-center gap-3 text-[0.92rem] text-cream/70 transition-colors hover:text-orange-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-accessible rounded-sm"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream/[0.08] text-[0.9rem]"
                aria-hidden="true"
              >
                ✉
              </span>
              hola@grajoestudio.com
            </a>
            <p className="mt-5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-cream/45">
              Cuenca, España · Disponibles para proyectos en 2026
            </p>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="flex flex-col gap-4 rounded-[var(--radius)] border border-[rgba(245,237,227,0.1)] bg-[rgba(245,237,227,0.05)] p-8">
              <p className="font-heading text-xl font-bold text-cream">¡Recibido!</p>
              <p className="text-[rgba(245,237,227,0.7)]">Te respondemos pronto.</p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulario de contacto"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  id="nombre"
                  label="Nombre"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  error={fieldErrors.nombre}
                  onChange={() => clearFieldError('nombre')}
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  error={fieldErrors.email}
                  onChange={() => clearFieldError('email')}
                />
              </div>
              <Field
                id="asunto"
                label="¿Qué necesitas?"
                type="text"
                placeholder="Desarrollo, accesibilidad, rescate..."
                required
                error={fieldErrors.asunto}
                onChange={() => clearFieldError('asunto')}
              />
              <TextareaField
                id="mensaje"
                label="Cuéntanos más"
                placeholder="Lo que quieras contarnos. Sin filtros."
                required
                error={fieldErrors.mensaje}
                onChange={() => clearFieldError('mensaje')}
              />

              {formError && (
                <p role="alert" className="text-sm text-orange-soft">
                  {formError}
                </p>
              )}

              <Button
                type="submit"
                variant="grajo-primary"
                size="pill"
                className="self-start"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
              </Button>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}

// ── Local sub-components ───────────────────────────────────────────────────

const inputBase =
  'rounded-[var(--radius-sm)] border bg-[rgba(245,237,227,0.08)] px-4 py-[0.85rem] font-body text-[0.95rem] text-cream placeholder:text-[rgba(245,237,227,0.35)] outline-none transition-colors focus:border-orange'

const inputNormal = 'border-[rgba(245,237,227,0.15)]'
const inputError  = 'border-red-400'

const labelClass =
  'text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-orange-soft'

interface FieldProps {
  id: string
  label: string
  type: string
  placeholder: string
  required?: boolean
  error?: string
  onChange?: () => void
}

function Field({ id, label, type, placeholder, required, error, onChange }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-orange-soft" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} ${error ? inputError : inputNormal}`}
        onChange={onChange}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

interface TextareaFieldProps {
  id: string
  label: string
  placeholder: string
  required?: boolean
  error?: string
  onChange?: () => void
}

function TextareaField({ id, label, placeholder, required, error, onChange }: TextareaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-orange-soft" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={5}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} ${error ? inputError : inputNormal} resize-y`}
        onChange={onChange}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
