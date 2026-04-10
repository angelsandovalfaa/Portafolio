import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Evita fsevents.watch en macOS cuando el binding nativo está roto o mal resuelto (Chokidar/Vite).
      usePolling: true,
    },
  },
})
