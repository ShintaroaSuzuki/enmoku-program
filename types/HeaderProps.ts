export type Link = {
    id: string
    title: string
}

export type HeaderProps = {
    links: Link[]
    title: string
    subtitle?: string
}
