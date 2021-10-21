import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import { DialogTitle, Divider, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));



export default function SearchAppBar() {

  const [state, setDrawerState] = 
    React.useState({ open: false });
  
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
  
    setDrawerState({ ...state, open });
  };

  const FilterSettings = () => (
    <Box
      sx={{ width: 320 }}
      role="presentation"
     >


      <Box
        sx={{ p: 2 }}
      >
        <Typography
          variant="h6"
        >
          Filter Settings
        </Typography>

        
      </Box>
      <Divider />
    </Box>
  );
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <React.Fragment key='right'>
            <IconButton
              onClick={toggleDrawer(true)}
              color="inherit"
              size="large"
              edge="end"
            >
              <SettingsIcon />
            </IconButton>
            <Drawer
              anchor={'right'}
              open={state['open']}
              onClose={toggleDrawer(false)}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <DialogTitle
                sx={{ width: 320 }}
              >
                Filter Settings
                <IconButton
                sx={{ p: 0, display: 'flex', justifyContent: 'flex-end' }}
                edge="end"
                  onClick={toggleDrawer(false)}
                >
                  <CancelIcon />
                </IconButton>
             </DialogTitle>
             <Divider />
            </Drawer>
          </React.Fragment>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
