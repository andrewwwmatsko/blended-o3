import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = value => {
    setError(null);
    setValue(value);
  };

  useEffect(() => {
    if (!value) return;
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchByRegion(value);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [value]);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        {loading && <Loader />}
        <SearchForm onSubmit={handleSearch} />
        {data.length > 0 && <CountryList countries={data} />}
      </Container>
    </Section>
  );
};
