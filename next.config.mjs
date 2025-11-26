// next.config.mjs  (or .ts)  – Pure ESM, no CommonJS
import createMDX   from '@next/mdx'
import remarkGfm   from 'remark-gfm'

const  useMdxRs = !Boolean(process.env.GITHUB_ACTIONS)

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js','jsx','ts','tsx','md','mdx'],
  experimental: { mdxRs: useMdxRs },
  distDir: 'out',
  output: 'export',
  images: { unoptimized: true },
}

// Only include plugin functions when NOT using mdx-rs
const mdxOptions = useMdxRs
  ? { /* keep options serializable for mdx-rs */ }
  : {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    }

const withMDX = createMDX({ options: mdxOptions })

export default withMDX(nextConfig)

