import Handlebars from 'handlebars';

import { template } from './error.tmpl.ts';
import { ErrorStatus } from '../../components/ErrorStatus';

export const Error500 = () => {
    return Handlebars.compile(template)({
        content: ErrorStatus({
            status: 500,
            message: 'Мы уже фиксим это, обновите чуть позже',
            linkHref: '/',
            linkText: 'На главную'
        })
    })
}
