export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QuerycontinentArgs = {
  code: Scalars['ID'];
};


export type QuerycontinentsArgs = {
  filter?: Maybe<ContinentFilterInput>;
};


export type QuerycountriesArgs = {
  filter?: Maybe<CountryFilterInput>;
};


export type QuerycountryArgs = {
  code: Scalars['ID'];
};


export type QuerylanguageArgs = {
  code: Scalars['ID'];
};


export type QuerylanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>;
};

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
  continent?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
};

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

