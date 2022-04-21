const SectionTitle = ({ text, id }: { text: string, id: string }) => {
  return (
    <>
      <h2 id={id} className="font-bold text-xl my-10 text-center">
        { text }
      </h2>
    </>
  )
}

export default SectionTitle
