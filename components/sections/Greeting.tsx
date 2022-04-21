import SectionTitle from "@/components/elements/SectionTitle"
import GreetingItem from "@/components/elements/GreetingItem"
import { GreetingItemProps } from "@/types"

const Program = ({ items }: { items: GreetingItemProps[] }) => {
  return (
    <div className="w-full my-20 pt-10 pb-16 flex flex-col items-center drop-shadow bg-white rounded-md" data-aos="fade-up">
      <SectionTitle text={'ごあいさつ'} id={'greeting'}/>
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
