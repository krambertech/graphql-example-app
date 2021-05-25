import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type CountryCardCountry = { __typename: 'Country', code: string, name: string, native: string, capital?: Types.Maybe<string>, emoji: string };

export const CountryCardCountry: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryCardCountry"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]};