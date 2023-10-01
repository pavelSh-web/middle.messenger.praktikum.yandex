import Handlebars from 'handlebars';

import { template } from './register.tmpl.ts';
import { AuthForm } from '../../components/AuthForm';

export const Register = () => {
    console.log(Handlebars.compile(template)({
        authForm: AuthForm({
            is: 'login',
            onSubmit: () => {}
        })
    }));

    return Handlebars.compile(template)({
        authForm: AuthForm({
            is: 'register',
            onSubmit: () => {}
        })
    })
}
