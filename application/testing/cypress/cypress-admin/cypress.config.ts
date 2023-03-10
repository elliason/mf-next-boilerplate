import { defineConfig } from 'cypress';
import { config } from 'dotenv';
import { readFile } from 'fs';
import * as path from 'path';

const root = path.resolve(__dirname, '../../../../');
const envFile = path.resolve(root, '.env');

config({ path: envFile });

export default defineConfig({
    e2e: {
        /* ---- IMPORTANT: DOMAIN HAS TO BE ADDED TO HOSTS FILE ---- */
        baseUrl: process.env.APP_HOST ? `https://admin.${process.env.APP_HOST}` : 'http://localhost:3000',
        /* ---- IMPORTANT: DOMAIN HAS TO BE ADDED TO HOSTS FILE ---- */
    },
});
