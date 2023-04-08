import react from '@vitejs/plugin-react';

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [react],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
};

export default config;
