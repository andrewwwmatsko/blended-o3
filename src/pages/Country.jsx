import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { countryId } = useParams();

  const location = useLocation();

  const path = location.state ?? '/';

  useEffect(() => {
    const getCountryData = async () => {
      setIsLoading(true);
      try {
        const info = await fetchCountry(countryId);
        setCountry(info);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCountryData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn pathname={path} />
        {error && <Heading title={error} bottom />}
        {isLoading && <Loader />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};
