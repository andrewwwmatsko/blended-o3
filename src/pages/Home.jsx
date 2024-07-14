import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handlerFetchCountries = async () => {
      setLoading(true);

      try {
        const countries = await getCountries();
        setCountries(countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    handlerFetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        {countries.length > 0 && <CountryList countries={countries} />}

        {error && <Heading title={error} bottom />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
