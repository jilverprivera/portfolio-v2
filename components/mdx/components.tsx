import Image from 'next/image'
import { InternalLink } from './shared'

export const MDXComponents = {
  img: (props: any) => (
    <Image
      width={1280}
      height={720}
      objectFit="contain"
      quality={100}
      alt="image"
      {...props}
    />
  ),
  InternalLink
}

