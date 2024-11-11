import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight'


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism, rehypeHighlight],
  },
});

export default withMDX(nextConfig);
