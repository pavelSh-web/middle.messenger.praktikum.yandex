import Handlebars from 'handlebars';

import { template } from './main.tmpl.ts';

import testChatsList from '../../components/ChatsList/testChatsList.ts';
import { ChatsList } from '../../components/ChatsList';
import { ChatView } from '../../components/ChatView';

export const Main = () => {
    return Handlebars.compile(template)({
        chatsList: ChatsList({
            // @ts-ignore
            list: testChatsList
        }),
        chatView: ChatView({})
    })
}
