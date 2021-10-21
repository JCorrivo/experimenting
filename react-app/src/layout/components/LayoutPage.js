import React from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import AppBar from './AppBar';
import HideOnScroll from './HideOnScroll';

export default function LayoutPage({ children }) {
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar />
      </HideOnScroll>
      <Toolbar /> {/*Hack to position content underneath the AppBar */}
      <Container maxWidth={false}>      
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
} 

