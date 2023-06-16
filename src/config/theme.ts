import { CssVarsThemeOptions } from '@mui/joy';
import { Inter } from '@next/font/google';

const inter = Inter({
  weight: ['600', '400', '300'],
  subsets: ['latin'],
  display: 'swap',
});

const themeConfig: CssVarsThemeOptions = {
  fontFamily: {
    body: `${inter.style.fontFamily}, var(--joy-fontFamily-fallback)`,
  },
};

export default themeConfig;
