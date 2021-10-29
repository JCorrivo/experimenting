import React, { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import SearchSettingsContext from './SearchSettingsContext';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 1,
              top: 11,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

const SearchSettingsDialog = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { searchSettings, setSearchSettings } = useContext(SearchSettingsContext);

  const handleRouteTypes = (event, selectedTypes) => {
    setSearchSettings({ 
      ...searchSettings, 
      routeTypes: selectedTypes 
    });
  };
  
  const handleSearchByName = (event, searchByRouteName) => {
    setSearchSettings({
      ...searchSettings,
      searchByRouteName
    })
  };

  const handleSearchByAreaName = (event, searchByAreaName) => {
    setSearchSettings({
      ...searchSettings,
      searchByAreaName
    })
  };

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <BootstrapDialog
        // onClose={handleClose}
        aria-labelledby="settings dialog"
        open={open}
        fullScreen={fullScreen}
        fullWidth={true}
    >
      <BootstrapDialogTitle variant="h4" id="customized-dialog-title" onClose={handleClose}>
        Search settings      
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <FormGroup>
          <FormControlLabel control={<Switch checked={searchSettings.searchByRouteName} onChange={handleSearchByName} />} label="Search routes by name" />
          <FormControlLabel control={<Switch checked={searchSettings.searchByAreaName} onChange={handleSearchByAreaName} />} label="Search routes by area name" />
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>Route types</Typography>
          <ToggleButtonGroup
            value={searchSettings.routeTypes}
            onChange={handleRouteTypes}
            color="primary"
            aria-label="route types to search"
          >
            <ToggleButton value="boulder">Boulder</ToggleButton>
            <ToggleButton value="trope">Top Rope</ToggleButton>
            <ToggleButton value="sport">Sport</ToggleButton>
            <ToggleButton value="trad">Trad</ToggleButton>
          </ToggleButtonGroup>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>Minimum stars</Typography>
          <Box sx={{ p: 1 }}>  
            <Slider
              size="small"
              aria-label="minimum star rating"
              defaultValue={2}
              getAriaValueText={valuetext}
              min={0}
              max={5}
              step={1}
              marks
              valueLabelDisplay="on"
            />
          </Box> 
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
            Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default SearchSettingsDialog;