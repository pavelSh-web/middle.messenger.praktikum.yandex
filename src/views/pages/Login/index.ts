import Handlebars from 'handlebars';

import { template } from './login.tmpl.ts';
import { AuthForm } from '../../components/AuthForm';

export const Login = () => {
    console.log(Handlebars.compile(template)({
        authForm: AuthForm({
            is: 'login',
            onSubmit: () => {}
        })
    }));

    return Handlebars.compile(template)({
        authForm: AuthForm({
            is: 'login',
            onSubmit: () => {}
        })
    })
}
