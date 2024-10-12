// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mi-proyecto-pizzeria/', // Debe coincidir exactamente con el nombre de tu repositorio
});
