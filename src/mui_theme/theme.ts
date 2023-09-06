'use client'
import '@fontsource/mitr';
import '@fontsource/raleway';

import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      fontFamily: ["Mitr", "sans-serif"].join(","),
      body1: {
        fontFamily: ["Raleway", "sans-serif"].join(",")
      },
      body2: {
        fontFamily: ["Raleway", "sans-serif"].join(",")
      },
      button: {
        textTransform: 'none'
      }
    }
});

export default theme