import Handlebars from 'handlebars';

import { template } from './authForm.tmpl.ts';
import { AuthFormProps } from './authForm';
import { templatePropsConfig } from './config.ts';

export const AuthForm = (props: AuthFormProps) => {
    console.log(templatePropsConfig[props.is]);
    console.log(Handlebars.compile(template)(templatePropsConfig[props.is]));

    return Handlebars.compile(template)(templatePropsConfig[props.is]);
}
