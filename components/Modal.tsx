import { VolumeSlash } from 'iconsax-react'
import { useSetRecoilState } from 'recoil'
import { modalStateAtom } from "@/stores/modalStateAtom"
import { ModalProps } from "@/types"

const Modal = ({ items }: ModalProps) => {
  const setModalState = useSetRecoilState(modalStateAtom)

  const _onClick = () => {
    setModalState(false)
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-center py-10">
      <div className="w-3/4">
        <h1 className="text-center text-2xl font-bold mb-5">ご鑑賞に際してのお願い</h1>
          <p className="font-bold">会場ではマナーモードのご協力をよろしくお願いいたします。</p>
          <div className="w-full flex flex-col items-center my-10">
            <VolumeSlash size={72} color={'rgb(220, 38, 38)'}/>
          </div>
        <ul className="pl-5">
          {
            items.map((item, key) => <li className="list-disc text-sm" key={`modalList_${key}`}>{item.body}</li>) 
          }
        </ul>
      </div>
      <button onClick={_onClick} className="bg-blue-900 text-white w-5/6 h-10 font-bold my-10">
        確認しました
      </button>
    </div>
  )
}

export default Modal
