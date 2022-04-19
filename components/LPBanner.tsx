import Image from 'next/image'
import { Link } from 'iconsax-react'

const LPBanner = () => {
  return (
    <div className="">
      <a href='https://enmoku-lp.vercel.app' target='_blank' rel="noopener noreferrer">
      <div className="">
        <Image src='/enmoku_ogp.png' alt='ogp画像' width={320} height={120} layout='fixed' />
        <div className="">
          <h3>enmoku | 演奏会のもったいないをゼロに</h3>
          <p>クラシックコンサートのプログラムを電子化するサービスです。アンケートの集計や次回のコンサートの集客まで、コンサート運営を一気通貫でサポートします。</p>
          <div>
            <Link size={12} color='rgba(151, 154, 155, 0.95)' />
            <span>https://enmoku.vercel.app</span>
          </div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default LPBanner
