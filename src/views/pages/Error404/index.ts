import Handlebars from 'handlebars';

import { template } from './error.tmpl.ts';
import { ErrorStatus } from '../../components/ErrorStatus';

export const Error404 = () => {
    return Handlebars.compile(template)({
        content: ErrorStatus({
            status: 404,
            message: 'Страница не найдена',
            linkHref: '/',
            linkText: 'На главную'
        })
    })
}
