import { Home } from './views/pages/Home';
import { Main } from './views/pages/Main';
import { Login } from './views/pages/Login';
import { Register } from './views/pages/Register';
import { ResetPass } from './views/pages/ResetPass';
import { Profile } from './views/pages/Profile';
import { Error404 } from './views/pages/Error404';
import { Error500 } from './views/pages/Error500';

export const ROUTES: Record<string, string> = {
    '/': Home(),
    '/chats': Main(),
    '/login': Login(),
    '/register': Register(),
    '/profile': Profile(),
    '/404': Error404(),
    '/500': Error500(),
    '/reset_password': ResetPass()
};
