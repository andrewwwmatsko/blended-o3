import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from '..';
import { routes } from '../../routes';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(({ flag, country, id }) => {
        return (
          <GridItem key={id}>
            <Link
              to={`/${routes.SEARCHCOUNTRY}/${id}`}
              state={location.pathname}
            >
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
