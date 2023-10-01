import { Login } from './views/pages/Login';
import { Register } from './views/pages/Register';

import './styles/styles.less';
import './helpers';

const ROUTES: Record<string, string> = {
    '/login': Login(),
    '/register': Register(),
    '/404': Login()
};

window.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    if (app) {
        app.innerHTML = (ROUTES[window.location.pathname] || ROUTES['/404']);
    }
});
