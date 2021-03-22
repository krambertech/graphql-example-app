import '@testing-library/jest-dom/extend-expect';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ApolloMockProvider from '../../testUtils/ApolloMockProvider';
import renderWithProviders from '../../testUtils/renderWithProviders';
import CountriesPage from './CountriesPage';

test('shows loading indication while loading', async () => {
  renderWithProviders(
    <ApolloMockProvider loading>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  const loadingIndicator = await screen.findByText('Loading...');
  expect(loadingIndicator).toBeDefined();
});

test('shows error indication if request failed', async () => {
  renderWithProviders(
    <ApolloMockProvider errors={[{ message: 'Fail!' }]}>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  const errorMessage = await screen.findByText('Fail!');
  expect(errorMessage).toBeDefined();
});

test('shows loaded countries', async () => {
  const queryMocks = {
    Country: () => [{ name: 'Germany' }, { name: 'Estonia' }],
  };

  renderWithProviders(
    <ApolloMockProvider queryMocks={queryMocks}>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  const countryCards = await screen.findAllByTestId('countryCard');
  expect(countryCards).toHaveLength(2);

  const country1 = await screen.findByRole('link', { name: /germany/i });
  expect(country1).toBeDefined();

  const country2 = await screen.findByRole('link', { name: /estonia/i });
  expect(country2).toBeDefined();
});

test('allows to search countries', async () => {
  const queryMocks = {
    Country: () => [
      { name: 'Germany' },
      { name: 'Estonia' },
      { name: 'France' },
      { name: 'Italy' },
      { name: 'Lithuania' },
    ],
  };

  renderWithProviders(
    <ApolloMockProvider queryMocks={queryMocks}>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  const countryCards = await screen.findAllByTestId('countryCard');
  expect(countryCards).toHaveLength(5);

  const searchField = await screen.findByRole('textbox', { name: /search/i });
  userEvent.type(searchField, 'it');

  const countryCardsAfterSearch = await screen.findAllByTestId('countryCard');
  expect(countryCardsAfterSearch).toHaveLength(2);

  expect(screen.getByRole('link', { name: /Italy/i })).toBeDefined();
  expect(screen.getByRole('link', { name: /Lithuania/i })).toBeDefined();
});

test('allows to filter by subregion', async () => {
  const queryMocks = {
    Country: jest
      .fn()
      .mockReturnValueOnce([
        { name: 'Germany' },
        { name: 'Estonia' },
        { name: 'France' },
        { name: 'Italy' },
        { name: 'Lithuania' },
      ])
      .mockReturnValueOnce([{ name: 'Estonia' }, { name: 'Lithuania' }]),
    Subregion: () => [{ name: 'Eastern Europe' }, { name: 'Asia' }],
  };

  renderWithProviders(
    <ApolloMockProvider queryMocks={queryMocks}>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

  const selectField = await screen.findByRole('combobox', { name: /subregion/i });
  userEvent.selectOptions(selectField, 'Eastern Europe');

  const loadingIndicator = await screen.findByText('Loading...');
  expect(loadingIndicator).toBeDefined();

  const countryCardsAfterSearch = await screen.findAllByTestId('countryCard');
  expect(countryCardsAfterSearch).toHaveLength(2);

  expect(screen.getByRole('link', { name: /Lithuania/i })).toBeDefined();
  expect(screen.getByRole('link', { name: /Estonia/i })).toBeDefined();
});
