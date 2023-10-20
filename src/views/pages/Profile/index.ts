import Handlebars from 'handlebars';

import { template } from './profile.tmpl.ts';

export const Profile = () => {
    const urlParams = new URLSearchParams(window.location.search);

    return Handlebars.compile(template)({
        // NOTE: временное решение для первого спринта
        inEdit: urlParams.get('in_edit') === 'true',
        name: 'Павел',
        imageSrc: 'https://avatars.dicebear.com/api/initials/P.svg',
        fields: [
            {
                title: 'Почта',
                content: 'pochta@yandex.ru',
                name: 'email',
                type: 'email'
            },
            {
                title: 'Логин',
                content: 'ivanivanov',
                name: 'login',
                type: 'text'
            },
            {
                title: 'Имя',
                content: 'Павел',
                name: 'first_name',
                type: 'text'
            },
            {
                title: 'Никнейм',
                content: 'Павел',
                name: 'display_name',
                type: 'text'
            },
            {
                title: 'Фамилия',
                content: 'Шорохов',
                name: 'second_name',
                type: 'text'
            },
            {
                title: 'Телефон',
                content: '+7 (909) 967 30 30',
                name: 'phone',
                type: 'tel'
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
