import themeConfig from "@/config/theme";
import { CssVarsProvider, extendTheme } from "@mui/joy";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={extendTheme(themeConfig)} defaultMode="system"
>
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}
