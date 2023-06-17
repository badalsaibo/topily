import { CssVarsThemeOptions } from '@mui/joy';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['600', '400', '300'],
  subsets: ['latin'],
  display: 'swap',
});

const themeConfig: CssVarsThemeOptions = {
  cssVarPrefix: '',
  fontFamily: {
    body: `${inter.style.fontFamily}, var(--fontFamily-fallback)`,
  },
  components: {
    JoySheet: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
};

export default themeConfig;
