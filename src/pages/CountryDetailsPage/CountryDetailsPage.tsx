import { Center, Heading, VStack, SimpleGrid, Spinner, Stack, Text, Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { HiCash, HiFlag, HiLocationMarker, HiTranslate, HiUserGroup } from 'react-icons/hi';
import { FiCrop } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import CountryCard from '../../components/CountryCard';
import TextLabel from '../../components/TextLabel/TextLabel';
import formatNumber from '../../utils/formatNumber';
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
    return <h1>{error}</h1>;
  }

  const country = data.countries?.[0];

  if (!country) {
    return <h1>Not found</h1>;
  }

  return (
    <Stack maxWidth="container.lg" mx="auto" spacing={8} p={12}>
      <Stack spacing={1}>
        <Heading as="h1" size="3xl">
          {country.flag?.emoji} {country.name}
        </Heading>
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
          {country.subregion?.name}
        </TextLabel>
      </SimpleGrid>

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
                    00:00
                  </Text>
                  <Text>{timezone.name}</Text>
                </Stack>
              </Box>
            ),
        )}
      </SimpleGrid>

      <Heading as="h2" size="md">
        Neighbors
      </Heading>
      <SimpleGrid columns={2} spacing={8}>
        {country.borders?.map(border => border && <CountryCard key={border?._id} country={border} />)}
      </SimpleGrid>
    </Stack>
  );
};

export default CountryDetailsPage;
