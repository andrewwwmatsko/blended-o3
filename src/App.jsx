import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Header } from 'components';
import { routes } from './routes';

const Home = lazy(() =>
  import('pages/Home').then(module => ({ default: module.Home })),
);

const SearchCountry = lazy(() =>
  import('pages/SearchCountry').then(module => ({
    default: module.SearchCountry,
  })),
);

const Country = lazy(() =>
  import('pages/Country').then(module => ({ default: module.Country })),
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.SEARCHCOUNTRY} element={<SearchCountry />} />
          <Route path={routes.COUNTRY} element={<Country />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
    </div>
  );
};
