import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Expose process.env.* (Amplify injects REACT_APP_* at build time)
  return {
    plugins: [react()],
    define: {
      'process.env': env
    }
  };
});
