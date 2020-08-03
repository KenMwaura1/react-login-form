import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, theme, ColorModeProvider,CSSReset} from '@chakra-ui/core;'
export default function App(){
  return (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
    </ColorModeProvider>
  </ThemeProvider>
    
    )
}
