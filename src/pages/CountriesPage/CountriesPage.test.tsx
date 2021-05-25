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
    countries: () => [{ name: 'Germany' }, { name: 'Estonia' }],
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

test('allows to filter by continent', async () => {
  const queryMocks = {
    countries: jest
      .fn()
      .mockReturnValueOnce([
        { name: 'Germany' },
        { name: 'Angola' },
        { name: 'France' },
        { name: 'Italy' },
        { name: 'Ethiopia' },
      ])
      .mockReturnValueOnce([{ name: 'Angola' }, { name: 'Ethiopia' }]),
    continents: () => [{ name: 'Europe' }, { name: 'Africa' }],
  };

  renderWithProviders(
    <ApolloMockProvider queryMocks={queryMocks}>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

  const selectField = await screen.findByRole('combobox', { name: /continent/i });
  userEvent.selectOptions(selectField, 'Africa');

  const loadingIndicator = await screen.findByText('Loading...');
  expect(loadingIndicator).toBeDefined();

  const countryCardsAfterSearch = await screen.findAllByTestId('countryCard');
  expect(countryCardsAfterSearch).toHaveLength(2);

  expect(screen.getByRole('link', { name: /angola/i })).toBeDefined();
  expect(screen.getByRole('link', { name: /ethiopia/i })).toBeDefined();
});
