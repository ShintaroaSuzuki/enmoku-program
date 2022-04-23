import Image from 'next/image'
import { LineBannerProps } from "@/types"
import { handleSendAccessData } from "@/utils/handleAccessData"

const LineBanner = ({ lineHref }: LineBannerProps) => {
  const _onClick = () => {
    handleSendAccessData({
      action: 'click',
      category: 'line',
      label: 'home'
    })
  }

  return (
    <div onClick={_onClick} className="my-16">
      <a href={lineHref} target="_blank" rel="noopener noreferrer">
        <Image src='/line_banner.png' alt='line banner' width={320} height={168} quality={100}/>
      </a>
    </div>
  )
}

export default LineBanner
