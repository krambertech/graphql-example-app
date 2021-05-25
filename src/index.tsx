import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || 'https://countries.trevorblades.com/',
  cache: new InMemoryCache({
    typePolicies: {
      Country: {
        keyFields: ['code'],
        fields: {
          capital: {
            read(value) {
              // https://en.wikipedia.org/wiki/KyivNotKiev
              return value === 'Kiev' ? 'Kyiv' : value;
            },
          },
        },
      },
      Continent: {
        keyFields: ['code'],
      },
      Language: {
        keyFields: ['code'],
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
