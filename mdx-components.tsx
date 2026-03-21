import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-4xl tracking-tight text-earth mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl font-bold text-earth mb-4 mt-10">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-earth-mid leading-relaxed mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-orange-accessible hover:text-orange-accessible-hover underline underline-offset-4">
        {children}
      </a>
    ),
    ...components,
  }
}
