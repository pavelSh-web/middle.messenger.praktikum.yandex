import Handlebars from 'handlebars';

import { template } from './register.tmpl.ts';
import { AuthForm } from '../../components/AuthForm';

export const Register = () => {
    return Handlebars.compile(template)({
        authForm: AuthForm({
            is: 'register',
            onSubmit: () => {}
        })
    })
}
