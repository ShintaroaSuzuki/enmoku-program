import SectionTitle from "@/components/elements/SectionTitle"
import ProgramItem from "@/components/elements/ProgramItem"
import { ProgramItemProps } from "@/types"

const Program = ({ items }: { items: ProgramItemProps[] }) => {
  return (
    <div className="my-20 pt-10 pb-16 flex flex-col items-center bg-white drop-shadow rounded-md" data-aos="fade-up">
      <SectionTitle text={'プログラム'} id={'program'} />
      <div className="flex flex-col w-5/6 gap-y-2.5">
        {
          items.map((item, key) => 
            <ProgramItem key={`programItem_${key}`} item={item} />    
          )
        }
      </div>
    </div>
  )
}

export default Program
