import Image from 'next/image'
import { Link } from 'iconsax-react'

const LPBanner = () => {
  return (
    <div className="border border-neutral-500 rounded-lg overflow-hidden my-20">
      <a href='https://enmoku-lp.vercel.app' target='_blank' rel="noopener noreferrer">
      <div className="">
        <Image src='/enmoku_ogp.png' alt='ogp画像' width={320} height={120} layout='fixed' />
        <div className="flex flex-col gap-y-0.5 p-3">
          <h3 className="text-xs font-bold">ファンを増やすコンサート運営プラットフォーム</h3>
          <p className="text-xs my-1">クラシックコンサートのプログラムを電子化するサービスです。アンケートの集計や次回のコンサートの集客まで、コンサート運営を一気通貫でサポートします。</p>
          <div className="flex flex-row items-center gap-x-0.5">
            <Link size={12} color='rgb(155, 155, 155)' />
            <span className="text-xs text-neutral-500">https://enmoku-lp.vercel.app</span>
          </div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default LPBanner
