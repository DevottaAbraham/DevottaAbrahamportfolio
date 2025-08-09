import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Tailwind config should be passed via 'tailwindcss' plugin options, not as a top-level key
  // Also, the correct keys are 'theme', 'extend', 'fontFamily', 'gridTemplateColumns'
  // Example:
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Roboto', 'sans-serif'],
          },
          gridTemplateColumns: {
            '70/30': '70% 30%',
          },
        },
      },
    },
  },
})






