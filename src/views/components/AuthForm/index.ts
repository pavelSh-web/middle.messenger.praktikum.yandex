import Handlebars from 'handlebars';

import { template } from './authForm.tmpl.ts';
import { AuthFormProps } from './authForm';
import { templatePropsConfig } from './config.ts';

export const AuthForm = (props: AuthFormProps) => {
    return Handlebars.compile(template)(templatePropsConfig[props.is]);
}
