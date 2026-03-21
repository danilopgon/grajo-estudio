import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeUp } from '@/components/animations/fade-up'
import { StaggerChildren } from '@/components/animations/stagger-children'

export const metadata: Metadata = {
  title: 'Blog — Grajo Estudio',
  description: 'Reflexiones sobre desarrollo web, accesibilidad y narrativa visual.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section aria-labelledby="blog-heading">
      <FadeUp>
        <span className="mb-4 inline-flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-orange">
          ✦ Blog
        </span>
      </FadeUp>

      <FadeUp delay={0.08}>
        <h1
          id="blog-heading"
          className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] text-earth"
        >
          Lo que pensamos,<br />lo que contamos
        </h1>
      </FadeUp>

      <FadeUp delay={0.16}>
        <p className="mb-12 max-w-[560px] text-[1.05rem] leading-[1.7] text-earth-mid">
          Reflexiones sobre código, accesibilidad y el lado humano del desarrollo.
        </p>
      </FadeUp>

      {posts.length === 0 ? (
        <p className="text-earth-mid">Próximamente.</p>
      ) : (
        <StaggerChildren className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-accessible rounded-[var(--radius)]"
            >
              <Card className="h-full transition-transform duration-200 group-hover:-translate-y-1">
                <CardContent className="flex flex-col gap-3 p-[clamp(1.5rem,3vw,2.5rem)]">
                  <time
                    dateTime={post.date}
                    className="text-[0.82rem] font-medium uppercase tracking-[0.06em] text-earth-mid"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 className="font-heading text-[1.2rem] font-bold text-earth leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[0.92rem] leading-[1.65] text-earth-mid">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="accent">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </StaggerChildren>
      )}
    </section>
  )
}
