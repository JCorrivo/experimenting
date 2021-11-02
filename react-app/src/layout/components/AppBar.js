import React, { useState } from 'react';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import SearchInput from './SearchInput';
import SearchSettingsContext from '../../common/contexts/SearchSettingsContext';
import { ReactComponent as SportIcon} from '../../assets/icons/short_quickdraw.svg';
import TradIcon from '../../common/components/icons/TradIcon';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'

const AppBar = React.forwardRef((props, ref) => {
  const [ searchSettings, setSearchSettings ] = useState({
    routeTypes: ['boulder', 'trope', 'sport', 'trad'],
    searchByRouteName: true,
    searchByAreaName: false
  }); 

  const showSettings = useMediaQuery(useTheme().breakpoints.up('sm'));

  return (
    <MuiAppBar {...props} ref={ref}>
      <SearchSettingsContext.Provider value={{ searchSettings, setSearchSettings }}>
        <Toolbar> 
          {showSettings && (
            <Stack direction="row" spacing={1}>
              {searchSettings.routeTypes.includes('sport') && (
                <SportIcon color="action" style={{ width: 30}} />
              )}
              {searchSettings.routeTypes.includes('trad') && (
                <TradIcon transform="rotate(-45)" fontSize="large" />
              )}            
            </Stack>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <SearchInput />
        </Toolbar>
      </SearchSettingsContext.Provider>
    </MuiAppBar>
  );
});

export default AppBar;