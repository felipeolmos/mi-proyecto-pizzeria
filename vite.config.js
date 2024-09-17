import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mi-proyecto-pizzeria/', // Ajusta esto con el nombre exacto de tu repositorio
})
