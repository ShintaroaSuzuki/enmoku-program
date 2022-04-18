import HistoryItemProps from '@/types'

const HistoryItem = ({ item }: { item: HistoryItemProps }) => {
  return (
    <>
      {
        item.label && <p>{ item.label }</p>
      }
      {
        item.events.map((event, key) => 
          <p key={`event_${key}`}>{ event }</p>
        )
      }
    </>
  )
}

export default HistoryItem
