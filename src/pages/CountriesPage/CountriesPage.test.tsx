import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ApolloMockProvider from '../../testUtils/ApolloMockProvider';
import CountriesPage from './CountriesPage';

test('shows loading indication while loading', async () => {
  render(
    <ApolloMockProvider loading>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  const pageLoadingScreen = await screen.findByTestId('pageLoadingScreen');
  expect(pageLoadingScreen).toBeDefined();
});

it('shows error message if request failed', async () => {
  render(
    <ApolloMockProvider errors={[{ message: 'Fail-fail-fail!' }]}>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  const errorScreen = await screen.findByText('Fail-fail-fail!');
  expect(errorScreen).toBeDefined();
});

it('shows loaded data', async () => {
  const queryMocks = {
    intUserGroups: () => [
      {
        name: 'General',
        region: null,
        vendorIntegrationSelectType: 'exclude',
        vendorIntegrations: [],
      },
    ],
  };

  render(
    <ApolloMockProvider queryMocks={queryMocks}>
      <CountriesPage />
    </ApolloMockProvider>,
  );

  const heading = await screen.findByRole('heading', { name: /user groups/i });

  expect(heading).toBeVisible();

  expect(screen.getByText('General')).toBeVisible();
  expect(screen.getByText('All regions')).toBeVisible();
  expect(screen.getByText('All integrations')).toBeVisible();
});
