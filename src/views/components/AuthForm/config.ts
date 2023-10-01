import { AuthFormIs, AuthFormTemplateProps } from './authForm';

export const templatePropsConfig: Record<AuthFormIs, AuthFormTemplateProps> = {
    login: {
        title: 'Вход',
        fields: [
            {
                label: 'Логин',
                name: 'login',
                id: 'login',
                type: 'text',
                placeholder: 'Введите логин',
            },
            {
                label: 'Пароль',
                name: 'password',
                id: 'password',
                type: 'password',
                placeholder: 'Введите пароль',
            }
        ],
        buttons: [
            {
                content: 'Войти',
                type: 'submit',
            },
            {
                content: 'Нет аккаунта?',
                href: '/register'
            },
        ]
    },
    register: {
        title: 'Вход',
        fields: [
            {
                label: 'Почта',
                name: 'email',
                id: 'email',
                type: 'email',
                placeholder: 'Введите почту',
            },
            {
                label: 'Логин',
                name: 'login',
                id: 'login',
                type: 'text',
                placeholder: 'Введите логин',
            },
            {
                label: 'Имя',
                name: 'firstname',
                id: 'firstname',
                type: 'text',
                placeholder: 'Введите имя',
            },
            {
                label: 'Фамилия',
                name: 'lastname',
                id: 'lastname',
                type: 'text',
                placeholder: 'Введите фамилию',
            },
            {
                label: 'Телефон',
                name: 'phone',
                id: 'phone',
                type: 'tel',
                placeholder: 'Введите номер телефона',
            },
            {
                label: 'Пароль',
                name: 'password',
                id: 'password',
                type: 'password',
                placeholder: 'Введите пароль',
            },
            {
                label: 'Пароль',
                name: 'password',
                id: 'password',
                type: 'password',
                placeholder: 'Введите пароль',
            }
        ],
        buttons: [
            {
                content: 'Зарегистрироваться',
                type: 'submit',
            },
            {
                content: 'Уже есть аккаунт?',
                href: '/register'
            },
        ]
    }
}
