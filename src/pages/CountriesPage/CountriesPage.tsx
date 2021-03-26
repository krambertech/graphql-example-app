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
import { useSubregionList } from './__generated__/SubregionList.query';

const CountriesPage: React.FC = () => {
  const [subregion, setSubregion] = useQueryParam('subregion');
  const [search, setSearch] = useQueryParam('search');
  const { data, loading, error } = useCountryList({
    variables: { filter: subregion ? { subregion: { name: subregion } } : undefined },
  });
  const subregionList = useSubregionList();

  if (error) {
    return <ErrorMessage title="Error" message={error.message} />;
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
          <Input
            aria-label="Search countries"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </InputGroup>
        <Select
          aria-label="Choose subregion"
          placeholder="All regions"
          width={250}
          value={subregion}
          onChange={e => setSubregion(e.target.value)}
        >
          {subregionList.data?.subregions?.map(
            subregion =>
              subregion?.name && (
                <option key={subregion._id} value={subregion.name}>
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
