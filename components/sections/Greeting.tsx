import SectionTitle from "@/components/elements/SectionTitle"
import GreetingItem from "@/components/elements/GreetingItem"
import { GreetingItemProps } from "@/types"

const Program = ({ items }: { items: GreetingItemProps[] }) => {
  return (
    <div className="my-20 flex flex-col items-center">
      <SectionTitle text={'ごあいさつ'} />
      <div className="flex flex-col gap-y-10 w-5/6">
        {
          items.map((item, key) => 
            <GreetingItem key={`greetingItem_${key}`} item={item} />    
          )
        }
      </div>
    </div>
  )
}

export default Program
