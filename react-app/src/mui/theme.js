import { createTheme } from '@mui/material/styles';

const typography = {
    fontFamily: [
        'Roboto',
        'sans-serif'
    ].join(','),
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
};

const theme = createTheme({
    typography,
});

export default theme;