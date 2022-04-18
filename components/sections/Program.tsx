import SectionTitle from "@/components/elements/SectionTitle"
import ProgramItem from "@/components/elements/ProgramItem"
import { ProgramItemProps } from "@/types"

const Program = ({ items }: { items: ProgramItemProps[] }) => {
  return (
    <div className="my-10">
      <SectionTitle text={'プログラム'} />
      {
        items.map((item, key) => 
          <ProgramItem key={`programItem_${key}`} item={item} />    
        )
      }
    </div>
  )
}

export default Program
