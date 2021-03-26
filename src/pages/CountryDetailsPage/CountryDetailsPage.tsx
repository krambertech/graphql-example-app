import { Center, Heading, Link, SimpleGrid, Spinner, Stack, Text, Box, HStack, Button } from '@chakra-ui/react';
import { HiFlag, HiLocationMarker, HiUserGroup, HiArrowRight } from 'react-icons/hi';
import { FiCrop } from 'react-icons/fi';
import { useParams, Link as RouterLink } from 'react-router-dom';
import CountryCard from '../../components/CountryCard';
import TextLabel from '../../components/TextLabel/TextLabel';
import formatNumber from '../../utils/formatNumber';
import TickingClock from '../../components/TickingClock';
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

  const country = data.countries?.[0];

  if (!country) {
    return <ErrorMessage title="404" message="Country does not exist" />;
  }

  return (
    <Stack maxWidth="container.lg" mx="auto" spacing={8} p={12}>
      <Stack spacing={1}>
        <HStack justify="space-between">
          <Heading as="h1" size="3xl">
            {country.flag?.emoji} {country.name}
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
        <Text fontSize="xl">{country.nativeName}</Text>
      </Stack>

      <SimpleGrid columns={2} spacingX={8} spacingY={2}>
        <TextLabel icon={<HiFlag />} label="Capital">
          {country.capital || '-'}
        </TextLabel>
        <TextLabel icon={<HiUserGroup />} label="Population">
          {formatNumber(country.population)}
        </TextLabel>
        <TextLabel icon={<FiCrop />} label="Area">
          {country.area}
        </TextLabel>
        <TextLabel icon={<HiLocationMarker />} label="Region">
          <Link as={RouterLink} to={`/countries?subregion=${country.subregion?.name}`}>
            {country.subregion?.name || '-'}
          </Link>
        </TextLabel>
      </SimpleGrid>

      <Stack as="section" spacing={4}>
        <Heading as="h2" size="md">
          Currencies
        </Heading>
        <SimpleGrid columns={2} spacing={8}>
          {country.currencies?.map(
            currency =>
              currency && (
                <Box borderWidth="1px" borderRadius="lg" p={6}>
                  <HStack spacing={4}>
                    <Text fontSize="4xl">{currency.symbol}</Text>
                    <Stack spacing={2}>
                      <Text fontWeight="bold">{currency.code}</Text>
                      <Text>{currency.name}</Text>
                    </Stack>
                  </HStack>
                </Box>
              ),
          )}
        </SimpleGrid>
      </Stack>

      <Stack as="section" spacing={4}>
        <Heading as="h2" size="md">
          Time zones
        </Heading>
        <SimpleGrid columns={2} spacing={8}>
          {country.timezones?.map(
            timezone =>
              timezone && (
                <Box borderWidth="1px" borderRadius="lg" p={6}>
                  <Stack spacing={2}>
                    <Text fontSize="xl" fontWeight="bold">
                      <TickingClock timezone={timezone.name} />
                    </Text>
                    <Text>{timezone.name}</Text>
                  </Stack>
                </Box>
              ),
          )}
        </SimpleGrid>
      </Stack>

      <Stack as="section" spacing={4}>
        <Heading as="h2" size="md">
          Neighbors
        </Heading>
        <SimpleGrid columns={2} spacing={8}>
          {country.borders?.map(border => border && <CountryCard key={border?._id} country={border} />)}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default CountryDetailsPage;
