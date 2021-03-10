import { Center, Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import React from 'react';
import CountryCard from '../../components/CountryCard';
import { useCountryList } from './__generated__/CountryList.query';

const CountriesPage: React.FC = () => {
  const { data, loading, error } = useCountryList();

  if (loading || !data) {
    return (
      <Center p={12}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Stack maxWidth="container.lg" mx="auto" spacing={8} p={12}>
      <Heading as="h1" size="3xl">
        Countries
      </Heading>
      <SimpleGrid columns={2} spacing={8}>
        {data.countries?.map(country => country && <CountryCard key={country?._id} country={country} />)}
      </SimpleGrid>
    </Stack>
  );
};

export default CountriesPage;
