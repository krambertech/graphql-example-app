import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
export type CountryCard_CountryFragment = { __typename: 'Country', _id?: Types.Maybe<string>, name: string, capital: string, area?: Types.Maybe<number>, flag?: Types.Maybe<{ __typename: 'Flag', _id?: Types.Maybe<string>, emoji: string }> };

export const CountryCard_CountryFragmentDoc = gql`
    fragment CountryCard_Country on Country {
  _id
  name
  capital
  area
  flag {
    _id
    emoji
  }
}
    `;