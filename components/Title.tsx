const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
    return (
        <div className="self-start mb-4 flex flex-row items-center gap-x-2">
            <h1 className="whitespace-pre-wrap text-3xl font-bold mb-2">
                {title}
            </h1>
            {subtitle && (
                <h2 className="whitespace-pre-wrap text-lg">{subtitle}</h2>
            )}
        </div>
    )
}

export default Title
