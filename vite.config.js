import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,tailwindcss()],server: {
    allowedHosts: ['9d0a-183-83-55-173.ngrok-free.app']
  }
})
