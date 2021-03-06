import Head from 'next/head';
import { VolumeSlash } from 'iconsax-react';
import { useSetRecoilState } from 'recoil';
import { modalStateAtom } from '@/stores/modalStateAtom';
import { ModalProps } from '@/types';
import { handleSendAccessData } from '@/utils/handleAccessData';

const Modal = ({ items }: ModalProps) => {
  const setModalState = useSetRecoilState(modalStateAtom);

  const _onClick = () => {
    setModalState(false);
    handleSendAccessData({
      action: 'click',
      category: 'modal',
      label: ''
    });
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center py-10">
      <Head>
        <title>new style ~ふるさと~</title>
        <meta name="description" content="new style ~ふるさと~" />
      </Head>

      <div className="w-3/4">
        <h1 className="text-center text-2xl font-bold mb-10 pb-3 border-b-2 border-black">
          ご鑑賞に際してのお願い
        </h1>
        <p className="font-bold">
          会場ではマナーモードのご協力をよろしくお願いいたします。
        </p>
        <div className="w-full flex flex-col items-center my-10">
          <VolumeSlash size={72} color={'rgb(155, 155, 155)'} />
        </div>
        <ul className="pl-5">
          {items.map((item, key) => (
            <li className="list-disc text-sm" key={`modalList_${key}`}>
              {item.body}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={_onClick}
        className="bg-blue-900 text-white w-3/4 h-10 font-bold my-10 rounded-sm"
      >
        確認しました →
      </button>
    </div>
  );
};

export default Modal;
