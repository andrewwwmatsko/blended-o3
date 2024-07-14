import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from 'components';

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
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="country" element={<SearchCountry />} />
          <Route path="country/:countryId" element={<Country />} />
        </Route>
      </Routes>
    </div>
  );
};
