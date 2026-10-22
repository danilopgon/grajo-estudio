import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use next/image for all MDX images
    img: ({ src, alt, width, height }) => (
      <Image
        src={src as string}
        alt={alt ?? ''}
        width={Number(width) || 800}
        height={Number(height) || 450}
        className="rounded-lg my-6 w-full"
      />
    ),
    // External links get target="_blank" automatically
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http')
      return (
        <a
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...props}
        >
          {children}
        </a>
      )
    },
    ...components,
  }
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components)
}
