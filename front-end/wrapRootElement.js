import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme"
// helper module to add MUI theme context provider
//wrapRootElement wraps root Gatsby element in MUI them provider
export const wrapRootElement = ({ element }) => {
  console.info('theme', theme);
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}