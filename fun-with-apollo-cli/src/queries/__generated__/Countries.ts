/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Countries
// ====================================================

export interface Countries_countries_continent {
  __typename: "Continent";
  name: string | null;
}

export interface Countries_countries_languages {
  __typename: "Language";
  name: string | null;
  native: string | null;
}

export interface Countries_countries {
  __typename: "Country";
  code: string | null;
  name: string | null;
  emoji: string | null;
  continent: Countries_countries_continent | null;
  currency: string | null;
  languages: (Countries_countries_languages | null)[] | null;
}

export interface Countries {
  countries: (Countries_countries | null)[] | null;
}
