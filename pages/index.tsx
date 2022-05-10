import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { handleSendAccessData } from '@/utils/handleAccessData'
import { useRecoilValue } from 'recoil'
import { modalStateAtom } from '@/stores/modalStateAtom'
import Modal from '@/components/Modal'
import Header from '@/components/Header'
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import Program from '@/components/sections/Program'
import History from '@/components/sections/History'
import Greeting from '@/components/sections/Greeting'
import { Questionnaire } from '@/components/Questionnaire'
import LineBanner from '@/components/LineBanner'
import LPBanner from '@/components/LPBanner'

const Home: NextPage = () => {
    const modalState = useRecoilValue(modalStateAtom)

    const lineHref = 'https://lin.ee/MlAnTvq'

    useEffect(() => {
        handleSendAccessData({
            action: 'view',
            category: 'home',
            label: ''
        })
    }, [])

    if (modalState)
        return (
            <Modal
                items={[
                    { body: 'マスクの着用をお願いします。' },
                    { body: '検温のご協力をお願いします。' },
                    { body: '写真撮影並びに動画撮影はご遠慮ください。' },
                    { body: '観客からのご声援はしないようにお願いします。' },
                    {
                        body: '感染症対策として、緊急連絡先のご記入をお願いします。'
                    },
                    {
                        body: 'ビデオ撮影を行っていますので、休憩まで座席からお立ちにならないようお願いします。'
                    }
                ]}
            />
        )

    return (
        <div className="flex flex-col items-center pb-10">
            <Head>
                <title>第16回 屯田西小学校 卒業定期演奏会</title>
                <meta
                    name="description"
                    content="第16回 屯田西小学校 卒業定期演奏会"
                />
            </Head>

            <Header
                links={[
                    { id: 'program', title: 'プログラム' },
                    { id: 'history', title: '１年間の歩み' },
                    { id: 'greeting', title: 'ごあいさつ' }
                ]}
            />

            <main className="w-5/6 mt-10 flex flex-col items-center">
                <Title text={'第16回 ブラスバンド\n卒業定期演奏会'} />

                <Program
                    items={[
                        { name: '屯田西小学校　校歌' },
                        { name: '６年生コーナー', type: 'message' },
                        { name: 'ありがとう' },
                        { name: 'The Old 100th ~賛美歌曲より' },
                        { name: 'ブラスバンドのための小組曲' },
                        { name: '休憩', type: 'pause' },
                        { name: 'OB・OGとの大共演', type: 'message' },
                        { name: 'アフリカンシンフォニー' },
                        { name: '宝島' },
                        { name: 'ウエストサイドストーリー' }
                    ]}
                />

                <History
                    items={[
                        {
                            label: '４月',
                            events: ['１年生歓迎コンサート「校内TV放送」']
                        },
                        {
                            label: '５月',
                            events: ['自宅練習 リモートレッスン']
                        },
                        {
                            label: '６月',
                            events: ['練習再開']
                        },
                        {
                            label: '８月',
                            events: [
                                '吹奏楽コンクール札幌地区大会\n...札幌コンサートホール キタラ',
                                '吹奏楽コンクール北海道大会\n...札幌コンサートホール キタラ'
                            ]
                        },
                        {
                            label: '１０月',
                            events: [
                                '東日本学校吹奏楽大会\n...札幌コンサートホール キタラ',
                                '日本管楽合奏コンテスト動画収録\n...岩見沢市民会館'
                            ]
                        },
                        {
                            label: '１１月',
                            events: [
                                '《店頭募金活動》',
                                '札幌スクール音楽祭\n...札幌コンサートホール キタラ',
                                'スクールバンド演奏会\n...札幌コンサートホール キタラ',
                                '日本管楽合奏コンテスト全国大会・特別演奏 動画配信'
                            ]
                        },
                        {
                            label: '１２月',
                            events: [
                                'YouTube ブラスバンドホームページ誕生',
                                'HBCこども音楽コンクール全道大会「音源審査」',
                                'クリスマスコンサート「校内TV放送」'
                            ]
                        },
                        {
                            label: '２月',
                            events: ['全道スクールバンドフェスティバル動画配信']
                        },
                        {
                            label: '３月',
                            events: ['第16回卒業定期演奏会']
                        }
                    ]}
                />

                <Greeting
                    items={[
                        {
                            author: 'ブラスバンド部長 日野澤 颯子',
                            body: `みなさん、今日は屯田西小学校ブラスバンド卒業定期演奏会にお越しくださり、ありがとうございます。
今年は、コロナの影響や人数が少ないこともあり、大変な日々でした。4月は全く集まって練習ができず、家での練習になりました。
5月15日、久々に全員が集合し、コンクールの曲が発表されました。
6月24日、2ヶ月ぶりに集まって練習が再開しました。
しかしコンクールまで残り1ヶ月半という大変な状況でした。それでも自分たちの努力とたくさんの方々の支えのもと、地区大会と全道大会で金賞を受賞できました。
最後の東日本大会は恩沢を表現する力がより大切になりました。私達や先生方や役員さん、応援してくださる方々に感謝の気持ちを音楽で表現するため、一生懸命練習を重ねました。
そした10月10日、東日本大会で金賞を受賞しました。終わった後は、今までの努力がむくわれたことの嬉しさと、支えてくださった方々への感謝の気持ちでいっぱいでした。
今日は、一年間の感謝をこめて、みなさんに笑顔になってもらえるような、定期演奏会にしたいと思っています。どうぞお楽しみください。`
                        },
                        {
                            author: 'ブラスバンド保護者会会長 日野澤 郁子\n指導者 天日 彰子',
                            body: `「第16回卒業定期演奏会」にご来場いただき、誠にありがとうございます。
また、日頃のご支援に、心より感謝申し上げます。
今年度も新型コロナ感染症のため、音楽活動の大きな制限を強いられました。新年度早々活動停止となり、再開できたかと思うとまたすぐ停止...と不安な日々の連続でしたが、昨年度の経験を活かしながら活動を続けてきました。
何より嬉しかったことは、5回もキタラの大舞台で聴衆の方たちに生演奏を聴いていただけたことです。中でも、6年ぶりに地元で開催された東日本吹奏楽大会で、『屯西サウンド』を響かせられたことが喜びです。
今年度も数々の困難がありましたが、実を結ぶことができたのは、団を支えてくださるたくさんの方たちが、どこまでも背中を押してくださったおかげです。
講師の皆様・支援者の皆様・地域の皆様・そして石狩文化協会のご支援に大変感謝致します。
音楽は、心を育む大きな力であり、未来を創る力でもあります。たとえコロナ禍であっても、心と心を、結ぶ音楽の力を信じ、皆様にずっと愛していただけるように、これからも活動に取り組んで参ります。
今日は年に一度の同窓会でもあります。フィナーレまで代々受け継いできた『伝統の屯西サウンド』をどうぞお楽しみください。`
                        }
                    ]}
                />

                <LineBanner lineHref={lineHref} />

                <Questionnaire lineHref={lineHref} />

                <LPBanner />
            </main>

            <Footer />
        </div>
    )
}

export default Home
