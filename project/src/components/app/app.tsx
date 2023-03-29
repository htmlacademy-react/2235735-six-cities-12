import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Page404 from '../../pages/page404/page404';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offers';

type AppProps = {
  offers: Offer[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main offers = {offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers = {offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Property />}
        />
        <Route
          path="*"
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
