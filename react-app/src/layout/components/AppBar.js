import React from 'react';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchInput from './SearchInput';

const AppBar = React.forwardRef((props, ref) => (
    <MuiAppBar {...props} ref={ref}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <SearchInput />
      </Toolbar>
    </MuiAppBar>
));

export default AppBar;