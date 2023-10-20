export interface ChatItem {
    name: string,
    time: string,
    message: string,
    unread: 0,
    isActive?: true
}

export interface ChatsListProps {
    list: ChatItem[]
}

export interface ChatsListTemplateProps {
    list: (ChatItem & { className: string })[]
}
