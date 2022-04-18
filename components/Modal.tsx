import { useSetRecoilState } from 'recoil'
import { modalStateAtom } from "@/stores/modalStateAtom"

const Modal = () => {
  const setModalState = useSetRecoilState(modalStateAtom)

  const _onClick = () => {
    setModalState(false)
  }

  return (
    <div>
      <h1>ご鑑賞に際してのお願い</h1>
      <button onClick={_onClick} >
        確認しました
      </button>
    </div>
  )
}

export default Modal
