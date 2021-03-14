import {
  Center,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { HiSearch } from 'react-icons/hi';
import CountryCard from '../../components/CountryCard';
import useQueryParam from '../../utils/useQueryParam';
import { useCountryList } from './__generated__/CountryList.query';

const CountriesPage: React.FC = () => {
  const [subregion, setSubregion] = useQueryParam('subregion');
  const [search, setSearch] = useQueryParam('search');
  const { data, loading, error } = useCountryList({
    variables: { filter: subregion ? { subregion: { name: subregion } } : {} },
    returnPartialData: true,
  });

  if (error) {
    return <h1>{error}</h1>;
  }

  const displayedCountries = data?.countries?.filter(
    country => country && country.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Stack maxWidth="container.lg" mx="auto" spacing={8} p={12}>
      <Heading as="h1" size="3xl">
        Countries
      </Heading>

      <HStack spacing={4}>
        <InputGroup width={200}>
          <InputLeftElement pointerEvents="none" children={<HiSearch />} />
          <Input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
        </InputGroup>
        <Select placeholder="All regions" width={250} value={subregion} onChange={e => setSubregion(e.target.value)}>
          {data?.subregions?.map(
            subregion =>
              subregion?.name && (
                <option key={subregion.name} value={subregion.name}>
                  {subregion.name}
                </option>
              ),
          )}
        </Select>
      </HStack>

      {loading ? (
        <Center p={12}>
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid columns={2} spacing={8}>
          {displayedCountries?.map(country => country && <CountryCard key={country?._id} country={country} />)}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default CountriesPage;
