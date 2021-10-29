import React, { useState } from 'react';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchInput from './SearchInput';
import SearchSettingsContext from './SearchSettingsContext';

const AppBar = React.forwardRef((props, ref) => {
  const [ searchSettings, setSearchSettings ] = useState({
    routeTypes: ['boulder', 'trope', 'sport', 'trad'],
    searchByRouteName: true,
    searchByAreaName: false
  }); 

  return (
    <MuiAppBar {...props} ref={ref}>
      <SearchSettingsContext.Provider value={{ searchSettings, setSearchSettings }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <SearchInput />
        </Toolbar>
      </SearchSettingsContext.Provider>
    </MuiAppBar>
  );
});

export default AppBar;