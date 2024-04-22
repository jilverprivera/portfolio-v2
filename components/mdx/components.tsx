import Image from 'next/image'

export const MDXComponents = {
  img: (props: any) => <Image width={1280} height={720} objectFit="contain" quality={100} alt="image" {...props} />
}

