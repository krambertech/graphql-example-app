import { Center, Heading, Link, SimpleGrid, Spinner, Stack, Text, Box, HStack, Button } from '@chakra-ui/react';
import { HiFlag, HiLocationMarker, HiGlobeAlt, HiArrowRight, HiPhone } from 'react-icons/hi';
import { useParams, Link as RouterLink } from 'react-router-dom';
import CountryCard from '../../components/CountryCard';
import TextLabel from '../../components/TextLabel/TextLabel';
import ErrorMessage from '../../components/ErrorMessage';
import { useCountryDetails } from './__generated__/CountryDetails.query';

const CountryDetailsPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const { data, loading, error } = useCountryDetails({
    variables: { code: code.toUpperCase() },
  });

  if (loading || !data) {
    return (
      <Center p={12}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return <ErrorMessage title="Error" message={error.message} />;
  }

  if (!data?.country) {
    return <ErrorMessage title="404" message="Country does not exist" />;
  }

  const { country } = data;

  return (
    <Stack maxWidth="container.lg" mx="auto" spacing={8} p={12}>
      <Stack spacing={1}>
        <HStack justify="space-between">
          <Heading as="h1" size="3xl">
            {country.emoji} {country.name}
          </Heading>
          <Button
            as={RouterLink}
            to="/countries"
            colorScheme="black"
            variant="link"
            size="lg"
            rightIcon={<HiArrowRight />}
          >
            All countries
          </Button>
        </HStack>
        <Text fontSize="xl">-</Text>
      </Stack>

      <SimpleGrid columns={2} spacingX={8} spacingY={2}>
        <TextLabel icon={<HiGlobeAlt />} label="ISO Code">
          {country.code}
        </TextLabel>
        <TextLabel icon={<HiFlag />} label="Capital">
          {country.capital || '-'}
        </TextLabel>
        <TextLabel icon={<HiLocationMarker />} label="Continent">
          <Link as={RouterLink} to={`/countries?subregion=${country.continent.code}`}>
            {country.continent.name}
          </Link>
        </TextLabel>
        <TextLabel icon={<HiPhone />} label="Phone code">
          +{country.phone}
        </TextLabel>
      </SimpleGrid>

      {country.languages.length !== 0 && (
        <Stack as="section" spacing={4}>
          <Heading as="h2" size="md">
            Languages
          </Heading>
          <SimpleGrid columns={2} spacing={8}>
            {country.languages?.map(language => (
              <Box borderWidth="1px" borderRadius="lg" p={6} key={language.code}>
                <HStack spacing={4}>
                  <Text fontSize="3xl" textTransform="uppercase">
                    {language.code}
                  </Text>
                  <Stack spacing={2}>
                    <Text fontWeight="bold">{language.name}</Text>
                    <Text direction={language.rtl ? 'rtl' : 'ltr'}>{language.native}</Text>
                  </Stack>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      )}

      {country.states.length !== 0 && (
        <Stack as="section" spacing={4}>
          <Heading as="h2" size="md">
            States
          </Heading>
          <SimpleGrid columns={2} spacing={8}>
            {country.states.map(state => (
              <Box borderWidth="1px" borderRadius="lg" p={6}>
                <HStack spacing={4}>
                  <Stack spacing={2}>
                    <Text fontWeight="bold">{state.code}</Text>
                    <Text>{state.name}</Text>
                  </Stack>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      )}

      {country.continent.countries.length !== 1 && (
        <Stack as="section" spacing={4}>
          <Heading as="h2" size="md">
            Neighbors
          </Heading>
          <SimpleGrid columns={2} spacing={8}>
            {country.continent.countries.map(neighbor => (
              <CountryCard key={neighbor?.code} country={neighbor} />
            ))}
          </SimpleGrid>
        </Stack>
      )}
    </Stack>
  );
};

export default CountryDetailsPage;
