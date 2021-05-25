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
import { HiSearch } from 'react-icons/hi';
import CountryCard from '../../components/CountryCard';
import ErrorMessage from '../../components/ErrorMessage';
import useQueryParam from '../../utils/useQueryParam';
import { useCountryList } from './__generated__/CountryList.query';
import { useContinentList } from './__generated__/ContinentList.query';

const CountriesPage: React.FC = () => {
  const [continent, setContinent] = useQueryParam('continent');
  const [search, setSearch] = useQueryParam('search');
  const { data, loading, error } = useCountryList({
    variables: { filter: continent ? { continent: { eq: continent } } : undefined },
  });
  const continents = useContinentList();

  if (error) {
    return <ErrorMessage title="Error" message={error.message} />;
  }

  const displayedCountries = data?.countries?.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Stack maxWidth="container.lg" mx="auto" spacing={8} p={12}>
      <Heading as="h1" size="3xl">
        Countries
      </Heading>

      <HStack spacing={4}>
        <InputGroup width={200}>
          <InputLeftElement pointerEvents="none" children={<HiSearch />} />
          <Input
            aria-label="Search countries"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </InputGroup>
        <Select
          aria-label="Choose continent"
          placeholder="All continents"
          width={250}
          value={continent}
          onChange={e => setContinent(e.target.value)}
        >
          {continents.data?.continents.map(continent => (
            <option key={continent.code} value={continent.code}>
              {continent.name}
            </option>
          ))}
        </Select>
      </HStack>

      {loading ? (
        <Center p={12}>
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid columns={2} spacing={8}>
          {displayedCountries?.map(country => (
            <CountryCard key={country.code} country={country} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default CountriesPage;
