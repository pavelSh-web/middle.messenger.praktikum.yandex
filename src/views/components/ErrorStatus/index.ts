import Handlebars from 'handlebars';

import { template } from './errorStatus.tmpl.ts';
import { ErrorStatusProps } from './errorStatus';

export const ErrorStatus = (props: ErrorStatusProps) => {
    return Handlebars.compile(template)(props);
}
