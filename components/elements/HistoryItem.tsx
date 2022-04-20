import { HistoryItemProps } from '@/types'

const HistoryItem = ({ item }: { item: HistoryItemProps }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {
        (item.label) && 
          <p className="font-bold italic text-sm">
            { item.label }
          </p>
      }
      <div className="flex flex-col gap-y-2">
        {
          item.events.map((event, key) => 
            <p className="whitespace-pre-wrap text-sm" key={`event_${key}`}>
              { event }
            </p>
          )
        }
      </div>
    </div>
  )
}

export default HistoryItem
