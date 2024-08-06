import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'myportfolio' with your actual GitHub repository name
export default defineConfig({
  base: '/myportfolio/', 
  plugins: [react()],
})

