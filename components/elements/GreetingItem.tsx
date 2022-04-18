import { GreetingItemProps } from '@/types'

const GreetingItem = ({ item }: { item: GreetingItemProps }) => {
  return (
    <>
      {
        item.author && <p className="whitespace-pre-wrap font-bold">{ item.author }</p>
      }
      <p className="whitespace-pre-wrap">{ item.body }</p>
    </>
  )
}

export default GreetingItem
