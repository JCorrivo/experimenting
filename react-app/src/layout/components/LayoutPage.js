import React from 'react';
import { Box, Container, Toolbar, Slide } from '@mui/material';
import AppBar from './AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function LayoutPage(props) {
  function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <> {/* Short syntax for React.Fragment */}
      <HideOnScroll {...props}>
        <AppBar />
      </HideOnScroll>
      <Toolbar /> {/*Hack to position content underneath the AppBar */}
      <Container maxWidth={false}>      
        <Box sx={{ flexGrow: 1 }}>
          {props.children}
        </Box>
      </Container>
    </>
  );
} 

