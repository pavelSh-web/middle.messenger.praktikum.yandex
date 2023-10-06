import Handlebars from 'handlebars';

import { template } from './chatsList.tmpl.ts';
import { ChatsListProps } from './chatsList';

export const ChatsList = (props: ChatsListProps) => {
    return Handlebars.compile(template)({
        ...props,

        list: props.list.map(chatItem => ({
            ...chatItem,

            className: chatItem.isActive ? 'active' : ''
        }))
    });
}
