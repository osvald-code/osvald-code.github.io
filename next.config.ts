import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  distDir: 'build'
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: '@mdx-js/react',   // for <MDXProvider>
  },
})

export default withMDX(nextConfig);
