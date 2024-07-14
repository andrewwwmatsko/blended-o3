import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ flag, country, id }) => {
        return (
          <GridItem key={id}>
            <Link to={`/country/${id}`}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
