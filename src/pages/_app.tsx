import themeConfig from '@/config/theme';
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={extendTheme(themeConfig)} defaultMode="light">
      <CssBaseline />
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}
