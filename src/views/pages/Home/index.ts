import Handlebars from 'handlebars';

import { template } from './home.tmpl.ts';

export const Home = () => {
    return Handlebars.compile(template)({
        links: [
            {
                href: '/chats',
                text: 'Главная'
            },
            {
                href: '/profile',
                text: 'Профиль'
            },
            {
                href: '/profile?in_edit=true',
                text: 'Редактирование профиля'
            },
            {
                href: '/login',
                text: 'Логин'
            },
            {
                href: '/register',
                text: 'Регистрация'
            },
            {
                href: '/reset_password',
                text: 'Сброс пароля'
            },
            {
                href: '/404',
                text: '404 статус'
            },
            {
                href: '/500',
                text: '500 статус'
            }
        ]
    })
}
