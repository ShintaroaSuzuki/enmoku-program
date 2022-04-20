import { GreetingItemProps } from '@/types'

const GreetingItem = ({ item }: { item: GreetingItemProps }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {
        item.author && <p className="whitespace-pre-wrap font-bold text-sm text-right">{ item.author }</p>
      }
      <p className="whitespace-pre-wrap text-sm">{ item.body }</p>
    </div>
  )
}

export default GreetingItem
