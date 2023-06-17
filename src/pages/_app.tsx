import themeConfig from '@/config/theme';
import type { AppProps } from 'next/app';
import {
  CssBaseline,
  CssVarsProvider,
  GlobalStyles,
  extendTheme,
} from '@mui/joy';
import CustomTabsProvider from '@/components/custom-tabs/custom-tabs.provider';
import EditorProvider from '@/components/editor/editor.provider';

const globalStyles = (
  <GlobalStyles
    styles={{
      'html, body, div#__next': {
        height: '100%',
      },
      body: {
        maxWidth: '768px',
        margin: '0 auto',
      },
    }}
  />
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={extendTheme(themeConfig)} defaultMode="light">
      <CssBaseline />
      {globalStyles}
      <EditorProvider>
        <CustomTabsProvider>
          <Component {...pageProps} />
        </CustomTabsProvider>
      </EditorProvider>
    </CssVarsProvider>
  );
}
