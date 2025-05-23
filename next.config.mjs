// next.config.mjs  (or .ts)  – Pure ESM, no CommonJS
import createMDX   from '@next/mdx'
import remarkGfm   from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js','jsx','ts','tsx','md','mdx'],
  experimental: { mdxRs: !Boolean(process.env.GITHUB_ACTIONS) },
  distDir: 'out',
  output: 'export',
  images: { unoptimized: true },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],     // must be a *function*, not undefined
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)

