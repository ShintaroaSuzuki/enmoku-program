import SectionTitle from '@/components/elements/SectionTitle'
import HistoryItem from '@/components/elements/HistoryItem'
import HistoryItemProps from '@/types'

const History = ({ items }: { items: HistoryItemProps[] }) => {
  return (
    <div>
      <SectionTitle text={'1年間の歩み'} />
      {
        items.map((item, key) => 
          <HistoryItem item={item} key={`historyItem_${key}`}/>
        )
      }
    </div>
  )
}

export default History
