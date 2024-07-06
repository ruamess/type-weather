import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'modules': path.resolve(__dirname, 'src/modules'),
      'screens': path.resolve(__dirname, 'src/screens'),
      'src': path.resolve(__dirname, 'src'),
      // добавьте другие алиасы по мере необходимости
    }
  }
})
