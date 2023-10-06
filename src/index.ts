import './styles/styles.less';
import './helpers';

import { ROUTES } from './routes-config.ts';

window.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    if (app) {
        app.innerHTML = (ROUTES[window.location.pathname] || ROUTES['/404']);
    }
});
