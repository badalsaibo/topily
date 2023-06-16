import { CssVarsThemeOptions } from "@mui/joy";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400"], subsets: ["latin"], display: "swap" });
const themeConfig: CssVarsThemeOptions = {
  fontFamily: {
    body: `${inter.style.fontFamily}`,
  },
};

export default themeConfig;
