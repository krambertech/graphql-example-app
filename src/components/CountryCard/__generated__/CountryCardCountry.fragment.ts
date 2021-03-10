import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type CountryCardCountry = { __typename: 'Country', _id?: Types.Maybe<string>, name: string, capital: string, population: number, area?: Types.Maybe<number>, subregion?: Types.Maybe<{ __typename: 'Subregion', _id?: Types.Maybe<string>, name: string }>, flag?: Types.Maybe<{ __typename: 'Flag', _id?: Types.Maybe<string>, emoji: string }> };

export const CountryCardCountry: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryCardCountry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"subregion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]};