import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [handlebars()],
});
