import { ProgramItemProps } from "@/types"

const ProgramItem = ({ item }: { item: ProgramItemProps }) => {
  return (
    <>
      <p className="font-semibold leading-loose">
        { item.name }
      </p>
    </>
  )
}

export default ProgramItem
