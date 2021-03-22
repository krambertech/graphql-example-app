import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory, History, MemoryHistory } from 'history';
import { ChakraProvider } from '@chakra-ui/react';

export const makeHistory = (): History => {
  return createMemoryHistory();
};

type Result = RenderResult & {
  history: MemoryHistory;
};

export default function renderWithProviders(children: React.ReactNode): Result {
  const history = createMemoryHistory();

  return {
    ...render(
      <ChakraProvider>
        <Router history={history}>{children}</Router>
      </ChakraProvider>,
    ),
    history,
  };
}
