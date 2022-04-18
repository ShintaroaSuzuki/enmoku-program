import SectionTitle from "@/components/elements/SectionTitle"
import GreetingItem from "@/components/elements/GreetingItem"
import { GreetingItemProps } from "@/types"

const Program = ({ items }: { items: GreetingItemProps[] }) => {
  return (
    <div className="my-10">
      <SectionTitle text={'ごあいさつ'} />
      {
        items.map((item, key) => 
          <GreetingItem key={`greetingItem_${key}`} item={item} />    
        )
      }
    </div>
  )
}

export default Program
