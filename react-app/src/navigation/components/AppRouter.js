import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import AboutPage from '../../about/components/AboutPage';
import LayoutPage from '../../layout/components/LayoutPage';

const AppRouter = () => (
  <BrowserRouter>
    <LayoutPage>
      <Redirect from="/" to="/about" />
      <Route path="/about" component={AboutPage} />
    </LayoutPage>
  </BrowserRouter>
);

export default AppRouter;