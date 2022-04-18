import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalStateAtom } from "@/stores/modalStateAtom"
import Modal from "@/components/Modal"
import Header from "@/components/Header"
import Title from "@/components/Title"
import Footer from "@/components/Footer"
import Program from "@/components/sections/Program"
import History from "@/components/sections/History"
import Greeting from "@/components/sections/Greeting"

const Home: NextPage = () => {
  const modalState = useRecoilValue(modalStateAtom)

  if (modalState) return <Modal />

  return (
    <div className="flex flex-col items-center mb-10">
      <Head>
        <title>第16回 屯田西小学校 卒業定期演奏会</title>
        <meta name="description" content="第16回 屯田西小学校 卒業定期演奏会" />
      </Head>

      <Header />

      <main className="w-5/6 mt-10">

        <Title text={'第16回 ブラスバンド\n卒業定期演奏会'} />

        <Program
          items={[
            { name: '屯田西小学校　校歌' },
            { name: 'ありがとう' },
            { name: 'The Old 100th ~賛美歌曲より' },
            { name: 'ブラスバンドのための小組曲' },
            { name: 'アフリカンシンフォニー' },
            { name: '宝島' },
            { name: 'ウエストサイドストーリー' },
          ]}
        />

        <History 
          items={[
            { 
              label: '4月',
              events: [
                '1年生歓迎コンサート「校内TV放送」'
              ]
            }
          ]}
        />

        <Greeting 
          items={[
            {
              author: 'ブラスバンド部長　日野澤 颯子',
              body: `みなさん、今日は屯田西小学校ブラスバンド卒業定期演奏会にお越しくださり、ありがとうございます。
今年は、コロナの影響や人数が少ないこともあり、大変な日々でした。4月は全く集まって練習ができず、家での練習になりました。
5月15日、久々に全員が集合し、コンクールの曲が発表されました。
6月24日、2ヶ月ぶりに集まって練習が再開しました。
しかしコンクールまで残り1ヶ月半という大変な状況でした。それでも自分たちの努力とたくさんの方々の支えのもと、地区大会と全道大会で金賞を受賞できました。
最後の東日本大会は恩沢を表現する力がより大切になりました。私達や先生方や役員さん、応援してくださる方々に感謝の気持ちを音楽で表現するため、一生懸命練習を重ねました。
そした10月10日、東日本大会で金賞を受賞しました。終わった後は、今までの努力がむくわれたことの嬉しさと、支えてくださった方々への感謝の気持ちでいっぱいでした。
今日は、一年間の感謝をこめて、みなさんに笑顔になってもらえるような、定期演奏会にしたいと思っています。どうぞお楽しみください。`
            }
          ]}
        />

      </main>

      <Footer />

    </div>
  )
}

export default Home
