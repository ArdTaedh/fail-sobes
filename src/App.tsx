import Box from '@mui/material/Box';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { styled } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import React, { useState } from 'react';
import { ShoppingCart } from './components/ShoppingCart';

const Background = styled(Box)(() => ({
  backgroundColor: grey[200],
  height: "calc(100vh - 118px)",
  paddingTop: 100
}));

export default function App() {

  return (
    <ThemeProvider 
      theme={theme}
    >
      <Background>
        <ShoppingCart />
      </Background>
    </ThemeProvider>
  );
}
