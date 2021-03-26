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
};






export enum AreaUnit {
  SQUARE_KILOMETERS = 'SQUARE_KILOMETERS',
  SQUARE_METERS = 'SQUARE_METERS',
  SQUARE_MILES = 'SQUARE_MILES'
}

export enum _CountryOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  alpha2Code_asc = 'alpha2Code_asc',
  alpha2Code_desc = 'alpha2Code_desc',
  alpha3Code_asc = 'alpha3Code_asc',
  alpha3Code_desc = 'alpha3Code_desc',
  area_asc = 'area_asc',
  area_desc = 'area_desc',
  capital_asc = 'capital_asc',
  capital_desc = 'capital_desc',
  demonym_asc = 'demonym_asc',
  demonym_desc = 'demonym_desc',
  gini_asc = 'gini_asc',
  gini_desc = 'gini_desc',
  nameTranslation_asc = 'nameTranslation_asc',
  nameTranslation_desc = 'nameTranslation_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  nativeName_asc = 'nativeName_asc',
  nativeName_desc = 'nativeName_desc',
  numericCode_asc = 'numericCode_asc',
  numericCode_desc = 'numericCode_desc',
  populationDensity_asc = 'populationDensity_asc',
  populationDensity_desc = 'populationDensity_desc',
  population_asc = 'population_asc',
  population_desc = 'population_desc'
}

export type _CountryFilter = {
  AND?: Maybe<Array<_CountryFilter>>;
  OR?: Maybe<Array<_CountryFilter>>;
  alpha2Code?: Maybe<Scalars['String']>;
  alpha2Code_contains?: Maybe<Scalars['String']>;
  alpha2Code_ends_with?: Maybe<Scalars['String']>;
  alpha2Code_in?: Maybe<Array<Scalars['String']>>;
  alpha2Code_not?: Maybe<Scalars['String']>;
  alpha2Code_not_contains?: Maybe<Scalars['String']>;
  alpha2Code_not_ends_with?: Maybe<Scalars['String']>;
  alpha2Code_not_in?: Maybe<Array<Scalars['String']>>;
  alpha2Code_not_starts_with?: Maybe<Scalars['String']>;
  alpha2Code_starts_with?: Maybe<Scalars['String']>;
  alpha3Code?: Maybe<Scalars['String']>;
  alpha3Code_contains?: Maybe<Scalars['String']>;
  alpha3Code_ends_with?: Maybe<Scalars['String']>;
  alpha3Code_in?: Maybe<Array<Scalars['String']>>;
  alpha3Code_not?: Maybe<Scalars['String']>;
  alpha3Code_not_contains?: Maybe<Scalars['String']>;
  alpha3Code_not_ends_with?: Maybe<Scalars['String']>;
  alpha3Code_not_in?: Maybe<Array<Scalars['String']>>;
  alpha3Code_not_starts_with?: Maybe<Scalars['String']>;
  alpha3Code_starts_with?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['Float']>;
  area_gt?: Maybe<Scalars['Float']>;
  area_gte?: Maybe<Scalars['Float']>;
  area_in?: Maybe<Array<Scalars['Float']>>;
  area_lt?: Maybe<Scalars['Float']>;
  area_lte?: Maybe<Scalars['Float']>;
  area_not?: Maybe<Scalars['Float']>;
  area_not_in?: Maybe<Array<Scalars['Float']>>;
  borders?: Maybe<_CountryFilter>;
  borders_every?: Maybe<_CountryFilter>;
  borders_in?: Maybe<Array<_CountryFilter>>;
  borders_none?: Maybe<_CountryFilter>;
  borders_not?: Maybe<_CountryFilter>;
  borders_not_in?: Maybe<Array<_CountryFilter>>;
  borders_single?: Maybe<_CountryFilter>;
  borders_some?: Maybe<_CountryFilter>;
  callingCodes?: Maybe<_CallingCodeFilter>;
  callingCodes_every?: Maybe<_CallingCodeFilter>;
  callingCodes_in?: Maybe<Array<_CallingCodeFilter>>;
  callingCodes_none?: Maybe<_CallingCodeFilter>;
  callingCodes_not?: Maybe<_CallingCodeFilter>;
  callingCodes_not_in?: Maybe<Array<_CallingCodeFilter>>;
  callingCodes_single?: Maybe<_CallingCodeFilter>;
  callingCodes_some?: Maybe<_CallingCodeFilter>;
  capital?: Maybe<Scalars['String']>;
  capital_contains?: Maybe<Scalars['String']>;
  capital_ends_with?: Maybe<Scalars['String']>;
  capital_in?: Maybe<Array<Scalars['String']>>;
  capital_not?: Maybe<Scalars['String']>;
  capital_not_contains?: Maybe<Scalars['String']>;
  capital_not_ends_with?: Maybe<Scalars['String']>;
  capital_not_in?: Maybe<Array<Scalars['String']>>;
  capital_not_starts_with?: Maybe<Scalars['String']>;
  capital_starts_with?: Maybe<Scalars['String']>;
  currencies?: Maybe<_CurrencyFilter>;
  currencies_every?: Maybe<_CurrencyFilter>;
  currencies_in?: Maybe<Array<_CurrencyFilter>>;
  currencies_none?: Maybe<_CurrencyFilter>;
  currencies_not?: Maybe<_CurrencyFilter>;
  currencies_not_in?: Maybe<Array<_CurrencyFilter>>;
  currencies_single?: Maybe<_CurrencyFilter>;
  currencies_some?: Maybe<_CurrencyFilter>;
  demonym?: Maybe<Scalars['String']>;
  demonym_contains?: Maybe<Scalars['String']>;
  demonym_ends_with?: Maybe<Scalars['String']>;
  demonym_in?: Maybe<Array<Scalars['String']>>;
  demonym_not?: Maybe<Scalars['String']>;
  demonym_not_contains?: Maybe<Scalars['String']>;
  demonym_not_ends_with?: Maybe<Scalars['String']>;
  demonym_not_in?: Maybe<Array<Scalars['String']>>;
  demonym_not_starts_with?: Maybe<Scalars['String']>;
  demonym_starts_with?: Maybe<Scalars['String']>;
  distanceToOtherCountries?: Maybe<_DistanceToOtherCountryFilter>;
  distanceToOtherCountries_every?: Maybe<_DistanceToOtherCountryFilter>;
  distanceToOtherCountries_in?: Maybe<Array<_DistanceToOtherCountryFilter>>;
  distanceToOtherCountries_none?: Maybe<_DistanceToOtherCountryFilter>;
  distanceToOtherCountries_not?: Maybe<_DistanceToOtherCountryFilter>;
  distanceToOtherCountries_not_in?: Maybe<Array<_DistanceToOtherCountryFilter>>;
  distanceToOtherCountries_single?: Maybe<_DistanceToOtherCountryFilter>;
  distanceToOtherCountries_some?: Maybe<_DistanceToOtherCountryFilter>;
  flag?: Maybe<_FlagFilter>;
  flag_in?: Maybe<Array<_FlagFilter>>;
  flag_not?: Maybe<_FlagFilter>;
  flag_not_in?: Maybe<Array<_FlagFilter>>;
  gini?: Maybe<Scalars['Float']>;
  gini_gt?: Maybe<Scalars['Float']>;
  gini_gte?: Maybe<Scalars['Float']>;
  gini_in?: Maybe<Array<Scalars['Float']>>;
  gini_lt?: Maybe<Scalars['Float']>;
  gini_lte?: Maybe<Scalars['Float']>;
  gini_not?: Maybe<Scalars['Float']>;
  gini_not_in?: Maybe<Array<Scalars['Float']>>;
  location?: Maybe<_Neo4jPointInput>;
  location_distance?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_gt?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_gte?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_lt?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_lte?: Maybe<_Neo4jPointDistanceFilter>;
  location_not?: Maybe<_Neo4jPointInput>;
  name?: Maybe<Scalars['String']>;
  nameTranslations?: Maybe<_TranslationFilter>;
  nameTranslations_every?: Maybe<_TranslationFilter>;
  nameTranslations_in?: Maybe<Array<_TranslationFilter>>;
  nameTranslations_none?: Maybe<_TranslationFilter>;
  nameTranslations_not?: Maybe<_TranslationFilter>;
  nameTranslations_not_in?: Maybe<Array<_TranslationFilter>>;
  nameTranslations_single?: Maybe<_TranslationFilter>;
  nameTranslations_some?: Maybe<_TranslationFilter>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
  nativeName_contains?: Maybe<Scalars['String']>;
  nativeName_ends_with?: Maybe<Scalars['String']>;
  nativeName_in?: Maybe<Array<Scalars['String']>>;
  nativeName_not?: Maybe<Scalars['String']>;
  nativeName_not_contains?: Maybe<Scalars['String']>;
  nativeName_not_ends_with?: Maybe<Scalars['String']>;
  nativeName_not_in?: Maybe<Array<Scalars['String']>>;
  nativeName_not_starts_with?: Maybe<Scalars['String']>;
  nativeName_starts_with?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['String']>;
  numericCode_contains?: Maybe<Scalars['String']>;
  numericCode_ends_with?: Maybe<Scalars['String']>;
  numericCode_in?: Maybe<Array<Scalars['String']>>;
  numericCode_not?: Maybe<Scalars['String']>;
  numericCode_not_contains?: Maybe<Scalars['String']>;
  numericCode_not_ends_with?: Maybe<Scalars['String']>;
  numericCode_not_in?: Maybe<Array<Scalars['String']>>;
  numericCode_not_starts_with?: Maybe<Scalars['String']>;
  numericCode_starts_with?: Maybe<Scalars['String']>;
  officialLanguages?: Maybe<_LanguageFilter>;
  officialLanguages_every?: Maybe<_LanguageFilter>;
  officialLanguages_in?: Maybe<Array<_LanguageFilter>>;
  officialLanguages_none?: Maybe<_LanguageFilter>;
  officialLanguages_not?: Maybe<_LanguageFilter>;
  officialLanguages_not_in?: Maybe<Array<_LanguageFilter>>;
  officialLanguages_single?: Maybe<_LanguageFilter>;
  officialLanguages_some?: Maybe<_LanguageFilter>;
  population?: Maybe<Scalars['Float']>;
  population_gt?: Maybe<Scalars['Float']>;
  population_gte?: Maybe<Scalars['Float']>;
  population_in?: Maybe<Array<Scalars['Float']>>;
  population_lt?: Maybe<Scalars['Float']>;
  population_lte?: Maybe<Scalars['Float']>;
  population_not?: Maybe<Scalars['Float']>;
  population_not_in?: Maybe<Array<Scalars['Float']>>;
  regionalBlocs?: Maybe<_RegionalBlocFilter>;
  regionalBlocs_every?: Maybe<_RegionalBlocFilter>;
  regionalBlocs_in?: Maybe<Array<_RegionalBlocFilter>>;
  regionalBlocs_none?: Maybe<_RegionalBlocFilter>;
  regionalBlocs_not?: Maybe<_RegionalBlocFilter>;
  regionalBlocs_not_in?: Maybe<Array<_RegionalBlocFilter>>;
  regionalBlocs_single?: Maybe<_RegionalBlocFilter>;
  regionalBlocs_some?: Maybe<_RegionalBlocFilter>;
  shortestPathToOtherCountry?: Maybe<_CountryFilter>;
  shortestPathToOtherCountry_every?: Maybe<_CountryFilter>;
  shortestPathToOtherCountry_in?: Maybe<Array<_CountryFilter>>;
  shortestPathToOtherCountry_none?: Maybe<_CountryFilter>;
  shortestPathToOtherCountry_not?: Maybe<_CountryFilter>;
  shortestPathToOtherCountry_not_in?: Maybe<Array<_CountryFilter>>;
  shortestPathToOtherCountry_single?: Maybe<_CountryFilter>;
  shortestPathToOtherCountry_some?: Maybe<_CountryFilter>;
  subregion?: Maybe<_SubregionFilter>;
  subregion_in?: Maybe<Array<_SubregionFilter>>;
  subregion_not?: Maybe<_SubregionFilter>;
  subregion_not_in?: Maybe<Array<_SubregionFilter>>;
  timezones?: Maybe<_TimezoneFilter>;
  timezones_every?: Maybe<_TimezoneFilter>;
  timezones_in?: Maybe<Array<_TimezoneFilter>>;
  timezones_none?: Maybe<_TimezoneFilter>;
  timezones_not?: Maybe<_TimezoneFilter>;
  timezones_not_in?: Maybe<Array<_TimezoneFilter>>;
  timezones_single?: Maybe<_TimezoneFilter>;
  timezones_some?: Maybe<_TimezoneFilter>;
  topLevelDomains?: Maybe<_TopLevelDomainFilter>;
  topLevelDomains_every?: Maybe<_TopLevelDomainFilter>;
  topLevelDomains_in?: Maybe<Array<_TopLevelDomainFilter>>;
  topLevelDomains_none?: Maybe<_TopLevelDomainFilter>;
  topLevelDomains_not?: Maybe<_TopLevelDomainFilter>;
  topLevelDomains_not_in?: Maybe<Array<_TopLevelDomainFilter>>;
  topLevelDomains_single?: Maybe<_TopLevelDomainFilter>;
  topLevelDomains_some?: Maybe<_TopLevelDomainFilter>;
};

export type Country = {
  __typename?: 'Country';
  _id?: Maybe<Scalars['String']>;
  /** ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO), to represent countries, dependent territories, and special areas of geographical interest. https://en.m.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
  alpha2Code: Scalars['String'];
  /** ISO 3166-1 alpha-3 codes are three-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO), to represent countries, dependent territories, and special areas of geographical interest. https://en.m.wikipedia.org/wiki/ISO_3166-1_alpha-3 */
  alpha3Code: Scalars['String'];
  alternativeSpellings?: Maybe<Array<Maybe<AlternativeSpelling>>>;
  /** The area in square kilometer, you can convert the area unit and population density through the convertedArea property */
  area?: Maybe<Scalars['Float']>;
  borders?: Maybe<Array<Maybe<Country>>>;
  callingCodes?: Maybe<Array<Maybe<CallingCode>>>;
  capital: Scalars['String'];
  convertedArea?: Maybe<Area>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  /** identifies residents or natives of a particular place, usually derived from the name of the place or that of an ethnic group. https://en.m.wikipedia.org/wiki/Demonym */
  demonym: Scalars['String'];
  distanceToOtherCountries?: Maybe<Array<Maybe<DistanceToOtherCountry>>>;
  flag?: Maybe<Flag>;
  /** In economics, the Gini coefficient, sometimes called the Gini index or Gini ratio, is a measure of statistical dispersion intended to represent the income or wealth distribution of a nation's residents, and is the most commonly used measurement of inequality. https://en.m.wikipedia.org/wiki/Gini_coefficient */
  gini?: Maybe<Scalars['Float']>;
  location: _Neo4jPoint;
  name: Scalars['String'];
  nameTranslation?: Maybe<Scalars['String']>;
  nameTranslations?: Maybe<Array<Maybe<Translation>>>;
  nativeName: Scalars['String'];
  numericCode?: Maybe<Scalars['String']>;
  officialLanguages?: Maybe<Array<Maybe<Language>>>;
  population: Scalars['Float'];
  /** The population per square kilometer */
  populationDensity?: Maybe<Scalars['Float']>;
  regionalBlocs?: Maybe<Array<Maybe<RegionalBloc>>>;
  /** Shortest path to go from one country to another with the least border crossing as possible */
  shortestPathToOtherCountry?: Maybe<Array<Maybe<Country>>>;
  subregion?: Maybe<Subregion>;
  timezones?: Maybe<Array<Maybe<Timezone>>>;
  /** A country code top-level domain (ccTLD) is an Internet top-level domain generally used or reserved for a country, sovereign state, or dependent territory identified with a country code. https://en.m.wikipedia.org/wiki/Country_code_top-level_domain */
  topLevelDomains?: Maybe<Array<Maybe<TopLevelDomain>>>;
};


export type CountrybordersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};


export type CountrycallingCodesArgs = {
  filter?: Maybe<_CallingCodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CallingCodeOrdering>>>;
};


export type CountryconvertedAreaArgs = {
  areaUnit?: Maybe<AreaUnit>;
};


export type CountrycurrenciesArgs = {
  filter?: Maybe<_CurrencyFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CurrencyOrdering>>>;
};


export type CountrydistanceToOtherCountriesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DistanceToOtherCountryOrdering>>>;
};


export type CountryflagArgs = {
  filter?: Maybe<_FlagFilter>;
};


export type CountrynameTranslationArgs = {
  languageCode?: Maybe<LanguageCode>;
};


export type CountrynameTranslationsArgs = {
  filter?: Maybe<_TranslationFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TranslationOrdering>>>;
};


export type CountryofficialLanguagesArgs = {
  filter?: Maybe<_LanguageFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LanguageOrdering>>>;
};


export type CountryregionalBlocsArgs = {
  filter?: Maybe<_RegionalBlocFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RegionalBlocOrdering>>>;
};


export type CountryshortestPathToOtherCountryArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
  otherCountryAlpha2Code: Scalars['String'];
};


export type CountrysubregionArgs = {
  filter?: Maybe<_SubregionFilter>;
};


export type CountrytimezonesArgs = {
  filter?: Maybe<_TimezoneFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TimezoneOrdering>>>;
};


export type CountrytopLevelDomainsArgs = {
  filter?: Maybe<_TopLevelDomainFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TopLevelDomainOrdering>>>;
};

export enum _TimezoneOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc'
}

export type _TimezoneFilter = {
  AND?: Maybe<Array<_TimezoneFilter>>;
  OR?: Maybe<Array<_TimezoneFilter>>;
  countries?: Maybe<_CountryFilter>;
  countries_every?: Maybe<_CountryFilter>;
  countries_in?: Maybe<Array<_CountryFilter>>;
  countries_none?: Maybe<_CountryFilter>;
  countries_not?: Maybe<_CountryFilter>;
  countries_not_in?: Maybe<Array<_CountryFilter>>;
  countries_single?: Maybe<_CountryFilter>;
  countries_some?: Maybe<_CountryFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
};

export type Timezone = {
  __typename?: 'Timezone';
  _id?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<Country>>>;
  name: Scalars['String'];
};


export type TimezonecountriesArgs = {
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};

export enum _SubregionOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc'
}

export type _SubregionFilter = {
  AND?: Maybe<Array<_SubregionFilter>>;
  OR?: Maybe<Array<_SubregionFilter>>;
  countries?: Maybe<_CountryFilter>;
  countries_every?: Maybe<_CountryFilter>;
  countries_in?: Maybe<Array<_CountryFilter>>;
  countries_none?: Maybe<_CountryFilter>;
  countries_not?: Maybe<_CountryFilter>;
  countries_not_in?: Maybe<Array<_CountryFilter>>;
  countries_single?: Maybe<_CountryFilter>;
  countries_some?: Maybe<_CountryFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  region?: Maybe<_RegionFilter>;
  region_in?: Maybe<Array<_RegionFilter>>;
  region_not?: Maybe<_RegionFilter>;
  region_not_in?: Maybe<Array<_RegionFilter>>;
};

export type Subregion = {
  __typename?: 'Subregion';
  _id?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<Country>>>;
  name: Scalars['String'];
  region?: Maybe<Region>;
};


export type SubregioncountriesArgs = {
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};


export type SubregionregionArgs = {
  filter?: Maybe<_RegionFilter>;
};

export enum _RegionOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc'
}

export type _RegionFilter = {
  AND?: Maybe<Array<_RegionFilter>>;
  OR?: Maybe<Array<_RegionFilter>>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  subregions?: Maybe<_SubregionFilter>;
  subregions_every?: Maybe<_SubregionFilter>;
  subregions_in?: Maybe<Array<_SubregionFilter>>;
  subregions_none?: Maybe<_SubregionFilter>;
  subregions_not?: Maybe<_SubregionFilter>;
  subregions_not_in?: Maybe<Array<_SubregionFilter>>;
  subregions_single?: Maybe<_SubregionFilter>;
  subregions_some?: Maybe<_SubregionFilter>;
};

export type Region = {
  __typename?: 'Region';
  _id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  subregions?: Maybe<Array<Maybe<Subregion>>>;
};


export type RegionsubregionsArgs = {
  filter?: Maybe<_SubregionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SubregionOrdering>>>;
};

export enum _LanguageOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  iso639_1_asc = 'iso639_1_asc',
  iso639_1_desc = 'iso639_1_desc',
  iso639_2_asc = 'iso639_2_asc',
  iso639_2_desc = 'iso639_2_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  nativeName_asc = 'nativeName_asc',
  nativeName_desc = 'nativeName_desc'
}

export type _LanguageFilter = {
  AND?: Maybe<Array<_LanguageFilter>>;
  OR?: Maybe<Array<_LanguageFilter>>;
  countries?: Maybe<_CountryFilter>;
  countries_every?: Maybe<_CountryFilter>;
  countries_in?: Maybe<Array<_CountryFilter>>;
  countries_none?: Maybe<_CountryFilter>;
  countries_not?: Maybe<_CountryFilter>;
  countries_not_in?: Maybe<Array<_CountryFilter>>;
  countries_single?: Maybe<_CountryFilter>;
  countries_some?: Maybe<_CountryFilter>;
  iso639_1?: Maybe<Scalars['String']>;
  iso639_1_contains?: Maybe<Scalars['String']>;
  iso639_1_ends_with?: Maybe<Scalars['String']>;
  iso639_1_in?: Maybe<Array<Scalars['String']>>;
  iso639_1_not?: Maybe<Scalars['String']>;
  iso639_1_not_contains?: Maybe<Scalars['String']>;
  iso639_1_not_ends_with?: Maybe<Scalars['String']>;
  iso639_1_not_in?: Maybe<Array<Scalars['String']>>;
  iso639_1_not_starts_with?: Maybe<Scalars['String']>;
  iso639_1_starts_with?: Maybe<Scalars['String']>;
  iso639_2?: Maybe<Scalars['String']>;
  iso639_2_contains?: Maybe<Scalars['String']>;
  iso639_2_ends_with?: Maybe<Scalars['String']>;
  iso639_2_in?: Maybe<Array<Scalars['String']>>;
  iso639_2_not?: Maybe<Scalars['String']>;
  iso639_2_not_contains?: Maybe<Scalars['String']>;
  iso639_2_not_ends_with?: Maybe<Scalars['String']>;
  iso639_2_not_in?: Maybe<Array<Scalars['String']>>;
  iso639_2_not_starts_with?: Maybe<Scalars['String']>;
  iso639_2_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
  nativeName_contains?: Maybe<Scalars['String']>;
  nativeName_ends_with?: Maybe<Scalars['String']>;
  nativeName_in?: Maybe<Array<Scalars['String']>>;
  nativeName_not?: Maybe<Scalars['String']>;
  nativeName_not_contains?: Maybe<Scalars['String']>;
  nativeName_not_ends_with?: Maybe<Scalars['String']>;
  nativeName_not_in?: Maybe<Array<Scalars['String']>>;
  nativeName_not_starts_with?: Maybe<Scalars['String']>;
  nativeName_starts_with?: Maybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  _id?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<Country>>>;
  iso639_1: Scalars['String'];
  iso639_2: Scalars['String'];
  name: Scalars['String'];
  nativeName: Scalars['String'];
};


export type LanguagecountriesArgs = {
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};

export enum _CurrencyOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  code_asc = 'code_asc',
  code_desc = 'code_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  symbol_asc = 'symbol_asc',
  symbol_desc = 'symbol_desc'
}

export type _CurrencyFilter = {
  AND?: Maybe<Array<_CurrencyFilter>>;
  OR?: Maybe<Array<_CurrencyFilter>>;
  code?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_ends_with?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Scalars['String']>>;
  code_not?: Maybe<Scalars['String']>;
  code_not_contains?: Maybe<Scalars['String']>;
  code_not_ends_with?: Maybe<Scalars['String']>;
  code_not_in?: Maybe<Array<Scalars['String']>>;
  code_not_starts_with?: Maybe<Scalars['String']>;
  code_starts_with?: Maybe<Scalars['String']>;
  countries?: Maybe<_CountryFilter>;
  countries_every?: Maybe<_CountryFilter>;
  countries_in?: Maybe<Array<_CountryFilter>>;
  countries_none?: Maybe<_CountryFilter>;
  countries_not?: Maybe<_CountryFilter>;
  countries_not_in?: Maybe<Array<_CountryFilter>>;
  countries_single?: Maybe<_CountryFilter>;
  countries_some?: Maybe<_CountryFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  _id?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  countries?: Maybe<Array<Maybe<Country>>>;
  name: Scalars['String'];
  symbol: Scalars['String'];
};


export type CurrencycountriesArgs = {
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};

export enum _RegionalBlocOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  acronym_asc = 'acronym_asc',
  acronym_desc = 'acronym_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc'
}

export type _RegionalBlocFilter = {
  AND?: Maybe<Array<_RegionalBlocFilter>>;
  OR?: Maybe<Array<_RegionalBlocFilter>>;
  acronym?: Maybe<Scalars['String']>;
  acronym_contains?: Maybe<Scalars['String']>;
  acronym_ends_with?: Maybe<Scalars['String']>;
  acronym_in?: Maybe<Array<Scalars['String']>>;
  acronym_not?: Maybe<Scalars['String']>;
  acronym_not_contains?: Maybe<Scalars['String']>;
  acronym_not_ends_with?: Maybe<Scalars['String']>;
  acronym_not_in?: Maybe<Array<Scalars['String']>>;
  acronym_not_starts_with?: Maybe<Scalars['String']>;
  acronym_starts_with?: Maybe<Scalars['String']>;
  countries?: Maybe<_CountryFilter>;
  countries_every?: Maybe<_CountryFilter>;
  countries_in?: Maybe<Array<_CountryFilter>>;
  countries_none?: Maybe<_CountryFilter>;
  countries_not?: Maybe<_CountryFilter>;
  countries_not_in?: Maybe<Array<_CountryFilter>>;
  countries_single?: Maybe<_CountryFilter>;
  countries_some?: Maybe<_CountryFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
};

export type RegionalBloc = {
  __typename?: 'RegionalBloc';
  _id?: Maybe<Scalars['String']>;
  acronym: Scalars['String'];
  countries?: Maybe<Array<Maybe<Country>>>;
  name: Scalars['String'];
  otherAcronyms?: Maybe<Array<Maybe<OtherAcronym>>>;
  otherNames?: Maybe<Array<Maybe<OtherName>>>;
};


export type RegionalBloccountriesArgs = {
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};

export type OtherAcronym = {
  __typename?: 'OtherAcronym';
  _id: Scalars['String'];
  name: Scalars['String'];
  regionalBlocs?: Maybe<Array<Maybe<RegionalBloc>>>;
};


export type OtherAcronymregionalBlocsArgs = {
  filter?: Maybe<_RegionalBlocFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RegionalBlocOrdering>>>;
};

export type OtherName = {
  __typename?: 'OtherName';
  _id: Scalars['String'];
  name: Scalars['String'];
  regionalBlocs?: Maybe<Array<Maybe<RegionalBloc>>>;
};


export type OtherNameregionalBlocsArgs = {
  filter?: Maybe<_RegionalBlocFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RegionalBlocOrdering>>>;
};

export type Area = {
  __typename?: 'Area';
  /** The population per square <your selected unit> */
  populationDensity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export enum _TranslationOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  languageCode_asc = 'languageCode_asc',
  languageCode_desc = 'languageCode_desc',
  value_asc = 'value_asc',
  value_desc = 'value_desc'
}

export type _TranslationFilter = {
  AND?: Maybe<Array<_TranslationFilter>>;
  OR?: Maybe<Array<_TranslationFilter>>;
  languageCode?: Maybe<Scalars['String']>;
  languageCode_contains?: Maybe<Scalars['String']>;
  languageCode_ends_with?: Maybe<Scalars['String']>;
  languageCode_in?: Maybe<Array<Scalars['String']>>;
  languageCode_not?: Maybe<Scalars['String']>;
  languageCode_not_contains?: Maybe<Scalars['String']>;
  languageCode_not_ends_with?: Maybe<Scalars['String']>;
  languageCode_not_in?: Maybe<Array<Scalars['String']>>;
  languageCode_not_starts_with?: Maybe<Scalars['String']>;
  languageCode_starts_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_not?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_not_ends_with?: Maybe<Scalars['String']>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_not_starts_with?: Maybe<Scalars['String']>;
  value_starts_with?: Maybe<Scalars['String']>;
};

export type Translation = {
  __typename?: 'Translation';
  _id?: Maybe<Scalars['String']>;
  languageCode: Scalars['String'];
  value: Scalars['String'];
};

export enum _FlagOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  emojiUnicode_asc = 'emojiUnicode_asc',
  emojiUnicode_desc = 'emojiUnicode_desc',
  emoji_asc = 'emoji_asc',
  emoji_desc = 'emoji_desc',
  svgFile_asc = 'svgFile_asc',
  svgFile_desc = 'svgFile_desc'
}

export type _FlagFilter = {
  AND?: Maybe<Array<_FlagFilter>>;
  OR?: Maybe<Array<_FlagFilter>>;
  country?: Maybe<_CountryFilter>;
  country_in?: Maybe<Array<_CountryFilter>>;
  country_not?: Maybe<_CountryFilter>;
  country_not_in?: Maybe<Array<_CountryFilter>>;
  emoji?: Maybe<Scalars['String']>;
  emojiUnicode?: Maybe<Scalars['String']>;
  emojiUnicode_contains?: Maybe<Scalars['String']>;
  emojiUnicode_ends_with?: Maybe<Scalars['String']>;
  emojiUnicode_in?: Maybe<Array<Scalars['String']>>;
  emojiUnicode_not?: Maybe<Scalars['String']>;
  emojiUnicode_not_contains?: Maybe<Scalars['String']>;
  emojiUnicode_not_ends_with?: Maybe<Scalars['String']>;
  emojiUnicode_not_in?: Maybe<Array<Scalars['String']>>;
  emojiUnicode_not_starts_with?: Maybe<Scalars['String']>;
  emojiUnicode_starts_with?: Maybe<Scalars['String']>;
  emoji_contains?: Maybe<Scalars['String']>;
  emoji_ends_with?: Maybe<Scalars['String']>;
  emoji_in?: Maybe<Array<Scalars['String']>>;
  emoji_not?: Maybe<Scalars['String']>;
  emoji_not_contains?: Maybe<Scalars['String']>;
  emoji_not_ends_with?: Maybe<Scalars['String']>;
  emoji_not_in?: Maybe<Array<Scalars['String']>>;
  emoji_not_starts_with?: Maybe<Scalars['String']>;
  emoji_starts_with?: Maybe<Scalars['String']>;
  svgFile?: Maybe<Scalars['String']>;
  svgFile_contains?: Maybe<Scalars['String']>;
  svgFile_ends_with?: Maybe<Scalars['String']>;
  svgFile_in?: Maybe<Array<Scalars['String']>>;
  svgFile_not?: Maybe<Scalars['String']>;
  svgFile_not_contains?: Maybe<Scalars['String']>;
  svgFile_not_ends_with?: Maybe<Scalars['String']>;
  svgFile_not_in?: Maybe<Array<Scalars['String']>>;
  svgFile_not_starts_with?: Maybe<Scalars['String']>;
  svgFile_starts_with?: Maybe<Scalars['String']>;
};

export type Flag = {
  __typename?: 'Flag';
  _id?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  emoji: Scalars['String'];
  emojiUnicode: Scalars['String'];
  svgFile: Scalars['String'];
};


export type FlagcountryArgs = {
  filter?: Maybe<_CountryFilter>;
};

export enum _DistanceToOtherCountryOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  countryName_asc = 'countryName_asc',
  countryName_desc = 'countryName_desc',
  distanceInKm_asc = 'distanceInKm_asc',
  distanceInKm_desc = 'distanceInKm_desc'
}

export type _DistanceToOtherCountryFilter = {
  AND?: Maybe<Array<_DistanceToOtherCountryFilter>>;
  OR?: Maybe<Array<_DistanceToOtherCountryFilter>>;
  countryName?: Maybe<Scalars['String']>;
  countryName_contains?: Maybe<Scalars['String']>;
  countryName_ends_with?: Maybe<Scalars['String']>;
  countryName_in?: Maybe<Array<Scalars['String']>>;
  countryName_not?: Maybe<Scalars['String']>;
  countryName_not_contains?: Maybe<Scalars['String']>;
  countryName_not_ends_with?: Maybe<Scalars['String']>;
  countryName_not_in?: Maybe<Array<Scalars['String']>>;
  countryName_not_starts_with?: Maybe<Scalars['String']>;
  countryName_starts_with?: Maybe<Scalars['String']>;
  distanceInKm?: Maybe<Scalars['Float']>;
  distanceInKm_gt?: Maybe<Scalars['Float']>;
  distanceInKm_gte?: Maybe<Scalars['Float']>;
  distanceInKm_in?: Maybe<Array<Scalars['Float']>>;
  distanceInKm_lt?: Maybe<Scalars['Float']>;
  distanceInKm_lte?: Maybe<Scalars['Float']>;
  distanceInKm_not?: Maybe<Scalars['Float']>;
  distanceInKm_not_in?: Maybe<Array<Scalars['Float']>>;
};

export type DistanceToOtherCountry = {
  __typename?: 'DistanceToOtherCountry';
  _id?: Maybe<Scalars['String']>;
  /** Sorry can't return the full country type :/ */
  countryName?: Maybe<Scalars['String']>;
  distanceInKm?: Maybe<Scalars['Float']>;
};

export enum _TopLevelDomainOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc'
}

export type _TopLevelDomainFilter = {
  AND?: Maybe<Array<_TopLevelDomainFilter>>;
  OR?: Maybe<Array<_TopLevelDomainFilter>>;
  countries?: Maybe<_CountryFilter>;
  countries_every?: Maybe<_CountryFilter>;
  countries_in?: Maybe<Array<_CountryFilter>>;
  countries_none?: Maybe<_CountryFilter>;
  countries_not?: Maybe<_CountryFilter>;
  countries_not_in?: Maybe<Array<_CountryFilter>>;
  countries_single?: Maybe<_CountryFilter>;
  countries_some?: Maybe<_CountryFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
};

export type TopLevelDomain = {
  __typename?: 'TopLevelDomain';
  _id?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<Country>>>;
  name: Scalars['String'];
};


export type TopLevelDomaincountriesArgs = {
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};

export enum _CallingCodeOrdering {
  _id_asc = '_id_asc',
  _id_desc = '_id_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc'
}

export type _CallingCodeFilter = {
  AND?: Maybe<Array<_CallingCodeFilter>>;
  OR?: Maybe<Array<_CallingCodeFilter>>;
  countries?: Maybe<_CountryFilter>;
  countries_every?: Maybe<_CountryFilter>;
  countries_in?: Maybe<Array<_CountryFilter>>;
  countries_none?: Maybe<_CountryFilter>;
  countries_not?: Maybe<_CountryFilter>;
  countries_not_in?: Maybe<Array<_CountryFilter>>;
  countries_single?: Maybe<_CountryFilter>;
  countries_some?: Maybe<_CountryFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
};

export type CallingCode = {
  __typename?: 'CallingCode';
  _id?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<Country>>>;
  name: Scalars['String'];
};


export type CallingCodecountriesArgs = {
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};

export type AlternativeSpelling = {
  __typename?: 'AlternativeSpelling';
  _id: Scalars['String'];
  countries?: Maybe<Array<Maybe<Country>>>;
  name: Scalars['String'];
};


export type AlternativeSpellingcountriesArgs = {
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
};

export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
};

export type _Neo4jTimeInput = {
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
};

export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type _Neo4jDateInput = {
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type _Neo4jDateTimeInput = {
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

export type _Neo4jLocalTimeInput = {
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type _Neo4jLocalDateTimeInput = {
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type _Neo4jPointDistanceFilter = {
  distance: Scalars['Float'];
  point: _Neo4jPointInput;
};

export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  crs?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

export type _Neo4jPointInput = {
  crs?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

export enum _RelationDirections {
  IN = 'IN',
  OUT = 'OUT'
}

export type Query = {
  __typename?: 'Query';
  CallingCode?: Maybe<Array<Maybe<CallingCode>>>;
  Country?: Maybe<Array<Maybe<Country>>>;
  Currency?: Maybe<Array<Maybe<Currency>>>;
  DistanceToOtherCountry?: Maybe<Array<Maybe<DistanceToOtherCountry>>>;
  Flag?: Maybe<Array<Maybe<Flag>>>;
  Language?: Maybe<Array<Maybe<Language>>>;
  Region?: Maybe<Array<Maybe<Region>>>;
  RegionalBloc?: Maybe<Array<Maybe<RegionalBloc>>>;
  Subregion?: Maybe<Array<Maybe<Subregion>>>;
  Timezone?: Maybe<Array<Maybe<Timezone>>>;
  TopLevelDomain?: Maybe<Array<Maybe<TopLevelDomain>>>;
  Translation?: Maybe<Array<Maybe<Translation>>>;
};


export type QueryCallingCodeArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_CallingCodeFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CallingCodeOrdering>>>;
};


export type QueryCountryArgs = {
  _id?: Maybe<Scalars['String']>;
  alpha2Code?: Maybe<Scalars['String']>;
  alpha3Code?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['Float']>;
  capital?: Maybe<Scalars['String']>;
  demonym?: Maybe<Scalars['String']>;
  filter?: Maybe<_CountryFilter>;
  first?: Maybe<Scalars['Int']>;
  gini?: Maybe<Scalars['Float']>;
  location?: Maybe<_Neo4jPointInput>;
  name?: Maybe<Scalars['String']>;
  nameTranslation?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
  population?: Maybe<Scalars['Float']>;
  populationDensity?: Maybe<Scalars['Float']>;
};


export type QueryCurrencyArgs = {
  _id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  filter?: Maybe<_CurrencyFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CurrencyOrdering>>>;
  symbol?: Maybe<Scalars['String']>;
};


export type QueryDistanceToOtherCountryArgs = {
  _id?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  distanceInKm?: Maybe<Scalars['Float']>;
  filter?: Maybe<_DistanceToOtherCountryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DistanceToOtherCountryOrdering>>>;
};


export type QueryFlagArgs = {
  _id?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  emojiUnicode?: Maybe<Scalars['String']>;
  filter?: Maybe<_FlagFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_FlagOrdering>>>;
  svgFile?: Maybe<Scalars['String']>;
};


export type QueryLanguageArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_LanguageFilter>;
  first?: Maybe<Scalars['Int']>;
  iso639_1?: Maybe<Scalars['String']>;
  iso639_2?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LanguageOrdering>>>;
};


export type QueryRegionArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_RegionFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RegionOrdering>>>;
};


export type QueryRegionalBlocArgs = {
  _id?: Maybe<Scalars['String']>;
  acronym?: Maybe<Scalars['String']>;
  filter?: Maybe<_RegionalBlocFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RegionalBlocOrdering>>>;
};


export type QuerySubregionArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_SubregionFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SubregionOrdering>>>;
};


export type QueryTimezoneArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_TimezoneFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TimezoneOrdering>>>;
};


export type QueryTopLevelDomainArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_TopLevelDomainFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TopLevelDomainOrdering>>>;
};


export type QueryTranslationArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_TranslationFilter>;
  first?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TranslationOrdering>>>;
  value?: Maybe<Scalars['String']>;
};

export enum LanguageCode {
  fa = 'fa',
  hr = 'hr',
  nl = 'nl',
  pt = 'pt',
  br = 'br',
  it = 'it',
  ja = 'ja',
  fr = 'fr',
  es = 'es',
  de = 'de'
}
