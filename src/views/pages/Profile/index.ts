import Handlebars from 'handlebars';

import { template } from './profile.tmpl.ts';

export const Profile = () => {
    return Handlebars.compile(template)({
        inEdit: true,
        name: 'Павел',
        imageSrc: 'https://avatars.dicebear.com/api/initials/P.svg',
        fields: [
            {
                title: 'Почта',
                content: 'pochta@yandex.ru'
            },
            {
                title: 'Логин',
                content: 'ivanivanov'
            },
            {
                title: 'Имя',
                content: 'Павел'
            },
            {
                title: 'Фамилия',
                content: 'Шорохов'
            },
            {
                title: 'Телефон',
                content: '+7 (909) 967 30 30'
            }
        ],
        actions: [
            {
                actionText: 'Изменить данные'
            },
            {
                actionText: 'Изменить пароль'
            },
            {
                actionText: 'Выйти'
            }
        ]
    })
}