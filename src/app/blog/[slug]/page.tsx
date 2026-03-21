import { getPostBySlug, getAllPosts } from '@/lib/mdx'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { meta } = getPostBySlug(slug)

  return (
    <main>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
    </main>
  )
}
