const SectionTitle = ({ text, id }: { text: string, id: string }) => {
  return (
    <>
      <h2 id={id} className="font-bold text-xl mb-12 text-center">
        { text }
      </h2>
    </>
  )
}

export default SectionTitle
