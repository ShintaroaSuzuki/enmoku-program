import { ProgramItemProps } from "@/types"

const ProgramItem = ({ item }: { item: ProgramItemProps }) => {

  const ItemComponent = () => {
    switch(item.type) {
      case 'message':
        return (
          <p className="text-sm font-normal leading-loose italic mt-4 mb-2 border-b">
            { item.name }
          </p>
        )
      case 'pause':
        return (
          <p className="text-center text-sm text-neutral-500 font-normal leading-loose mt-4 mb-2">
            { item.name }
          </p>
        )
      default:
        return (
          <p className="text-sm font-semibold leading-loose">
            { item.name }
          </p>
        )
    }
  }

  return (
    <div>
      {ItemComponent()}
    </div>
  )
}

export default ProgramItem
