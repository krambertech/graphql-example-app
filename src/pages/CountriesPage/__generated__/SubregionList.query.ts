import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SubregionListVariables = Types.Exact<{ [key: string]: never; }>;


export type SubregionList = { __typename: 'Query', subregions?: Types.Maybe<Array<Types.Maybe<{ __typename: 'Subregion', _id?: Types.Maybe<string>, name: string }>>> };


export const SubregionListDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubregionList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"subregions"},"name":{"kind":"Name","value":"Subregion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useSubregionList__
 *
 * To run a query within a React component, call `useSubregionList` and pass it any options that fit your needs.
 * When your component renders, `useSubregionList` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubregionList({
 *   variables: {
 *   },
 * });
 */
export function useSubregionList(baseOptions?: Apollo.QueryHookOptions<SubregionList, SubregionListVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubregionList, SubregionListVariables>(SubregionListDocument, options);
      }
export function useSubregionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubregionList, SubregionListVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubregionList, SubregionListVariables>(SubregionListDocument, options);
        }
export type SubregionListHookResult = ReturnType<typeof useSubregionList>;
export type SubregionListLazyQueryHookResult = ReturnType<typeof useSubregionListLazyQuery>;
export type SubregionListQueryResult = Apollo.QueryResult<SubregionList, SubregionListVariables>;