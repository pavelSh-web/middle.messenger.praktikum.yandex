import Handlebars from 'handlebars';

import { template } from './chatView.tmpl.ts';
import { ChatViewProps } from './chatView';

export const ChatView = (props: ChatViewProps) => {
    return Handlebars.compile(template)(props);
}
