import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on GitHub Pages project sites
// (https://USERNAME.github.io/REPO/) without hardcoding the repo name.
export default defineConfig({
  base: './',
  plugins: [react()],
})
