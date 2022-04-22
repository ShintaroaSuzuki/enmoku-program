import Link from 'next/link'
import Image from 'next/image'
import { handleSendAccessData } from "@/utils/handleAccessData"

const Footer = () => {
  const _onClick = () => {
    handleSendAccessData({
      action: 'click',
      category: 'footer',
      label: ''
    })
  }
  
  return (
    <footer className="flex flex-col items-center gap-y-2 mt-20 mb-10">
      <Link href="https://nonab.super.site" passHref>
        <div onClick={_onClick} className="flex flex-col items-center">
          <a target="_blank" rel='noopener noreferrer'>
            <Image src="/nonab_logo_transparent_gray.png" alt="home footer image" width={1892/24} height={566/24}/>
          </a>
        </div>
      </Link>
      <Link href="https://nonab.super.site">
        <a onClick={_onClick} className="text-neutral-400 text-[9px]" target='_blank' rel='noopener noreferrer'>nonab合同会社(予定)</a>
      </Link>
    </footer>
  )
}

export default Footer
