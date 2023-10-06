import Handlebars from 'handlebars';

import { template } from './resetPassword.tmpl.ts';

export const ResetPass = () => {
    return Handlebars.compile(template)({
        title: 'Сброс пароля',
        passwordLabel: 'Новый пароль',
        passwordPlaceholder: 'Введите пароль',
        repeatPasswordLabel: 'Повторите пароль',
        repeatPasswordPlaceholder: 'Введите пароль',
        buttonText: 'Изменить пароль'
    })
}
