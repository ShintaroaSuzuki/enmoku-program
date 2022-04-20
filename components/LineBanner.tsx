import Image from 'next/image'
import { LineBannerProps } from "@/types"

const LineBanner = ({ lineHref }: LineBannerProps) => {
  return (
    <div className="my-20">
      <a href={lineHref} target="_blank" rel="noopener noreferrer">
        <Image src='/line_banner.png' alt='line banner' width={320} height={168} quality={100}/>
      </a>
    </div>
  )
}

export default LineBanner
