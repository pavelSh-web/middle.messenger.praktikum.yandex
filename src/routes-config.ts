import { Main } from './views/pages/Main';
import { Login } from './views/pages/Login';
import { Register } from './views/pages/Register';
import { Profile } from './views/pages/Profile';
import { Error404 } from './views/pages/Error404';
import { Error500 } from './views/pages/Error500';
import { ResetPass } from './views/pages/ResetPass';

export const ROUTES: Record<string, string> = {
    '/': Main(),
    '/login': Login(),
    '/register': Register(),
    '/profile': Profile(),
    '/404': Error404(),
    '/500': Error500(),
    '/reset_password': ResetPass()
};
