import SectionTitle from '@/components/elements/SectionTitle'
import HistoryItem from '@/components/elements/HistoryItem'
import { HistoryItemProps } from '@/types'

const History = ({ items }: { items: HistoryItemProps[] }) => {
  return (
    <div className="my-20 flex flex-col items-center">
      <SectionTitle text={'１年間の歩み'} />
      <div className="flex flex-col gap-y-6 w-3/4">
        {
          items.map((item, key) => 
            <HistoryItem item={item} key={`historyItem_${key}`}/>
          )
        }
      </div>
    </div>
  )
}

export default History
