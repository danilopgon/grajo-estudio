import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { useMDXComponents } from '../../../../mdx-components'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const { meta } = getPostBySlug(slug)
  return {
    title: `${meta.title} — Grajo Estudio`,
    description: meta.description,
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { meta, content, readingTime } = getPostBySlug(slug)
  const components = useMDXComponents({})

  return (
    <div className="mx-auto max-w-[720px]">
      {/* Back link */}
      <a
        href="/blog"
        className={cn(buttonVariants({ variant: 'grajo-ghost', size: 'pill' }), 'mb-8 inline-flex gap-1 px-0 text-earth-mid hover:text-orange')}
      >
        ← Volver al blog
      </a>

      {/* Post header */}
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-[0.82rem] text-earth-mid">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{readingTime} min de lectura</span>
        </div>

        <h1 className="mb-6 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-earth">
          {meta.title}
        </h1>

        <p className="mb-6 text-[1.1rem] leading-[1.65] text-earth-mid">
          {meta.description}
        </p>

        {meta.tags && meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant="accent">{tag}</Badge>
            ))}
          </div>
        )}
      </header>

      <hr className="mb-10 border-sand" />

      {/* MDX body */}
      <article className="grajo-prose">
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  )
}
