const Title = ({ text }: { text: string }) => {
  return (
    <>
      <h1 className="whitespace-pre-wrap text-3xl font-bold self-start">
        { text }
      </h1>
    </>
  ) 
}

export default Title
