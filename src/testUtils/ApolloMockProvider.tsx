import React, { ReactNode } from 'react';
import casual from 'casual';
import { addMocksToSchema, IMocks } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloCache, InMemoryCache, ApolloClient, ApolloLink, ApolloProvider, Observable } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { GraphQLError } from 'graphql';
import { loader } from 'graphql.macro';
import { typeDefs } from '../__generated__/typeDefs';

/**
 * This is needed to support _id identifier,
 * otherwise it gets replaced with +id and produces an error
 */
const typePolicies = {
  Country: { keyFieldName: '_id' },
  Subregion: { keyFieldName: '_id' },
  Flag: { keyFieldName: '_id' },
};

const commonResolvers: IMocks = {
  // scalars
  String: () => casual.word,
  Int: () => casual.integer,
  Float: () => casual.double(0, 1000),

  // custom types
  Country: () => ({
    name: () => casual.country,
    alpha2Code: () => casual.country_code,
  }),
};

/**
 * This implementation of mocking is heavily based on this article
 * https://www.freecodecamp.org/news/a-new-approach-to-mocking-graphql-data-1ef49de3d491/
 */

type ApolloMockProviderProps = {
  /**
   * GraphQL request will be in loading indefinitely, useful to test
   * loading states
   */
  loading?: boolean;

  /**
   * If provided, request will fail and return these errors
   */
  errors?: Partial<GraphQLError>[];

  /**
   * Resolvers for custom types, that will override default ones
   * {
   *   User: () => ({
   *     name: 'Joe', -> all users will have name 'Joe'
   *   }),
   * }
   */
  resolvers?: IMocks;

  /**
   * Mocks for query types in format:
   * { user: () => { ... } }
   */
  queryMocks?: IMocks;

  /**
   * Mocks for mutations types in format:
   * { createUser: () => { ... } }
   * It is useful to use jest.fn to test mutations
   */
  mutationMocks?: IMocks;
  cache?: ApolloCache<any>;
  children: ReactNode;
};

const ApolloMockProvider: React.FC<ApolloMockProviderProps> = ({
  children,
  loading,
  errors,
  resolvers = {},
  mutationMocks = {},
  queryMocks = {},
  cache,
}: ApolloMockProviderProps) => {
  if (loading) {
    const link = new ApolloLink(() => new Observable(() => {}));

    const client = new ApolloClient({
      link,
      cache: cache || new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  }

  if (errors) {
    const link = new ApolloLink(
      () =>
        new Observable(observer => {
          observer.next({
            errors: (errors || [{ message: 'Unspecified error' }]) as GraphQLError[],
          });
          observer.complete();
        }),
    );

    const client = new ApolloClient({
      link,
      cache: cache || new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  }

  /**
   * https://www.graphql-tools.com/docs/generate-schema
   */
  const baseSchema = makeExecutableSchema({
    typeDefs: loader('../../schema.graphql'),
  });

  /**
   * Adding mocks to schema, read more:
   * https://www.graphql-tools.com/docs/mocking
   */
  const schema = addMocksToSchema({
    schema: baseSchema,
    typePolicies,
    mocks: {
      Query: () => ({
        ...queryMocks,
      }),
      Mutation: () => ({
        ...mutationMocks,
      }),
      ...commonResolvers,
      ...resolvers,
    },
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: cache || new InMemoryCache(),
    defaultOptions: {
      mutate: { errorPolicy: 'all' },
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloMockProvider;
