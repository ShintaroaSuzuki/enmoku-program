import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { handleSendAccessData } from '@/utils/handleAccessData';
import { useRecoilValue } from 'recoil';
import { modalStateAtom } from '@/stores/modalStateAtom';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Program from '@/components/sections/Program';
import Profile from '@/components/sections/Profile';
// import History from '@/components/sections/History'
// import Greeting from '@/components/sections/Greeting'
import { Questionnaire } from '@/components/Questionnaire';
import LineBanner from '@/components/LineBanner';
import LPBanner from '@/components/LPBanner';

const Home: NextPage = () => {
  const modalState = useRecoilValue(modalStateAtom);

  const lineHref = 'https://lin.ee/oN3Xxft';

  useEffect(() => {
    handleSendAccessData({
      action: 'view',
      category: 'home',
      label: ''
    });
  }, []);

  if (modalState)
    return (
      <Modal
        items={[
          { body: 'マスクの着用をお願いします。' },
          { body: '検温のご協力をお願いします。' },
          { body: '会場内での飲食はご遠慮ください。' },
          { body: '写真、動画の撮影はご遠慮ください。' }
        ]}
      />
    );

  return (
    <div className="flex flex-col items-center pb-10">
      <Head>
        <title>new style ~ふるさと~</title>
        <meta name="description" content="new style ~ふるさと~" />
      </Head>

      <Header
        title="new style"
        subtitle="~ふるさと~"
        links={[
          { id: 'program', title: 'プログラム' },
          { id: 'profile', title: '出演者' }
        ]}
      />

      <main className="w-5/6 mt-10 flex flex-col items-center">
        <Title title={'new style'} subtitle={'~ふるさと~'} />

        <Program
          items={[
            { name: '中村 愛伽', type: 'message' },
            {
              name: 'ソナタ ホ長調 K.380 L.23',
              composer: 'スカルラッティ'
            },
            {
              name: 'ノクターン 第10番 変イ長調 Op.32-2',
              composer: 'ショパン'
            },
            {
              name: '巡礼の年 第2年への追加「ヴェネツィアとナポリ」より タランテラ S.162',
              composer: 'リスト'
            },
            { name: '伊藤 拓朗', type: 'message' },
            {
              name: '無伴奏チェロ組曲第一番より プレリュード',
              composer: 'J.S.バッハ'
            },
            { name: 'バラード', composer: 'H.トマジ' },
            { name: 'サクス・オ・フン', composer: 'R.ヴィードフ' },
            { name: '休憩（10分）', type: 'pause' },
            { name: '山本 健太郎・須藤 由衣', type: 'message' },
            { name: '愛の挨拶 Op.12', composer: 'エルガー' },
            {
              name: 'チェロとピアノのソナタ 第2番 Op.58より',
              composer: 'メンデルスゾーン'
            },
            { name: '三本木 力哉', type: 'message' },
            {
              name: '幻想曲 ニ短調 K.397',
              composer: 'モーツァルト'
            },
            {
              name: 'ピアノソナタ 第2番 イ長調 Op.2-2',
              composer: 'ベートーヴェン'
            }
          ]}
        />

        <Questionnaire lineHref={lineHref} />

        <Profile
          items={[
            {
              name: '中村 愛伽',
              biography: `北海道札幌市出身。藤女子高等学校を経て、東京音楽大学を卒業。東京音楽大学大学院音楽研究科器楽専攻鍵盤楽器研究領域修士課程を修了。
4歳でヤマハ音楽教室へ入室。5歳よりピアノを始める。
第16回ペトロフピアノコンクール、審査員賞受賞。
第17回大阪国際音楽コンクールピアノ部門（Age-U）、ファイナル入選。
第27回日本クラシック音楽コンクールピアノ部門、全国大会第4位。（第1位なし）
ザルツブルク=モーツァルト国際室内楽コンクール2021 in Tokyo 実演部門　特別賞受賞。
第19回、第20回東京音楽大学 校友会 北海道支部演奏会に出演。
2017年4月《2016年度ピアノ専攻定期試験 成績優秀者による第7回演奏会》に出演。
2018年2月《ピアノデュオ講座 修了演奏会》に出演。
同年3月 《東京音楽大学ピアノ学内卒業演奏会》に出演。
平成31年度東京音楽大学短期留学奨学生として、リセウ音楽院に留学。アレックス・アルグアシル氏に師事。
2001年より音楽工房G.M.P.主催、バンビーニコンサートやレクチャーコンサート、チャリティーコンサートに出演。
2013年、2015年に同主催により札幌にてソロリサイタルを開催。
これまでにピアノを松下恭子、大楽勝美、仲田みずほ、岡田敦子の各氏に師事。2017年よりW.ブロンズのプライベートレッスンを受講。学内にてロナン・オホラ、河村尚子の公開レッスンを受講。
ピアノデュオ、伴奏法を水谷真理子に師事。室内楽を深山尚久、前田昌利、東海千浪、小川剛一郎、山田武彦の各氏に師事。パイプオルガンを徳岡めぐみに師事。`
            },
            {
              name: '伊藤 拓朗',
              biography: `12歳からサクソフォンを始める。
札幌日本大学高等学校を経て札幌大谷大学芸術学部音楽学科卒業。
卒業後は国立音楽大学ディプロマコース管打楽器ソリストコースにて学ぶ。
現在、東京を中心にフリーランス奏者として活動中。
サクソフォンを田中靖人、クラリネットを川村慎敬氏に師事。  クラシックの演奏を初め中高生の指導や「タクロー」としてスタジオワーク、ライブサポートなど幅広く活動中。 ブギウギ専務こと上杉周大ミニアルバム「Shake it」「ワオッ!」のレコーディングに参加。 また、上杉周大バンドメンバーとしてやついフェスやワンマンライブなどに多数出演。
札幌テレビ放送(STV)のテレビ番組「ブギウギ専務」のエンディングにちらっと出演中。
サクソフォンカルテットにて札幌コンサートホールkitara主催の若い目の音楽会に大学推薦で出演。
数多くの自主公演コンサートを開催し好評を博す。「Trio MOUSAI」「東京サクソフォーンオーケストラ (TSO)」所属。`
            },
            {
              name: '山本 健太郎',
              biography: `北海道札幌市出身。
札幌大谷高等学校、東京音楽大学卒業。
同大学大学院研究科修了。
東京と北海道を中心に室内楽やオーケストラなどの演奏活動を行なっている。
第21回別府アルゲリッチ音楽祭 ベスト・オブ・ベストシリーズ Vol.7 オーケストラ・ コンサートにオーケストラとして参加。
2021年ザルツブルク＝モーツァルト国際コンクール特別賞。
これまでにチェロを竹本利郎、石川祐支、Dmitry Feygin、山本裕康の各氏に師事。
室内楽を大野かおる、苅田雅治、鈴木秀美、百武由紀、諸田由里子、横山俊朗の各氏に師事。`
            },
            {
              name: '須藤 由衣',
              biography: `2歳よりピアノを始める。東京音楽大学ピアノ科卒業。2018年同大学の卒業演奏会にて選抜。第31回毎日こどもピアノコンクール金賞及び審査員特別賞、連弾の部優秀賞。第36回ピティナピアノコンペティション連弾上級の部奨励賞。第29回JPTAピアノオーディション地区優秀賞・全国大会入賞。第3回日本バッハコンクール高校生部門ベスト賞。ヨーロッパ国際ピアノコンクール in Japan ジュニア特級II-L部門 ディプロマ賞。ベーテンピアノコンクール連弾の部最優秀賞。これまでにピアノを斉藤香苗、赤松林太郎、三浦捷子、稲田潤子に師事。`
            },
            {
              name: '三本木 力哉',
              biography: `北海道小樽市出身。5歳からピアノを始める。
小樽双葉高等学校を経て、札幌大谷大学芸術学部音楽学科ピアノ演奏クラス卒業。
第25回日本クラシック音楽コンクール全国大会第5位。
第21回北海道ショパン学生ピアノコンクール金賞、併せて北海道新聞社賞。
第43回ピティナ･ピアノコンペティション全国決勝大会G級入選。
中国黒竜江省哈爾浜音楽学院での青少年交流演奏会に出演。ドイツ・シュトゥットガルト音楽学校オーケストラとモーツァルト:ピアノ協奏曲第21番を共演。
これまで橋本純、青村理恵子、石田敏明、横山幸雄、橘高昌男、植田克己の各氏に師事。
現在東京藝術大学音楽学部別科ピアノ専攻1年在籍、青柳晋氏に師事。`
            }
          ]}
        />

        {/*
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
                */}

        <LineBanner lineHref={lineHref} />

        <LPBanner />
      </main>

      <Footer />
    </div>
  );
};
export default Home;
