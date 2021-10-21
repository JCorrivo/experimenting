import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './mui/theme';
import AppRouter from './navigation/components/AppRouter';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
