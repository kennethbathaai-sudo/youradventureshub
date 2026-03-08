import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        adventure: {
          orange: '#ff6b35',
          green: '#2ecc71',
          blue: '#3498db',
          dark: '#1a1a2e',
        }
      }
    },
  },
  plugins: [],
}
export default config
