import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings'; 
import SearchSettingsDialog from './SearchSettingsDialog';

export default function SearchInput() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search criteria' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton 
        color="primary" 
        sx={{ p: '10px' }} 
        aria-label="settings" 
        onClick={handleClickOpen}
      >
        <SettingsIcon />
      </IconButton>
      
      <SearchSettingsDialog 
        open={open} 
        handleClose={handleClose} 
      />
    </Paper>
  );
}