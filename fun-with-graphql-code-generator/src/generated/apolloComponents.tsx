
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload promise that resolves an
   * object containing `stream`, `filename`, `mimetype` and `encoding`.
 */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Continent = {
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  countries?: Maybe<Array<Maybe<Country>>>,
};

export type Country = {
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  native?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  continent?: Maybe<Continent>,
  currency?: Maybe<Scalars['String']>,
  languages?: Maybe<Array<Maybe<Language>>>,
  emoji?: Maybe<Scalars['String']>,
  emojiU?: Maybe<Scalars['String']>,
};

export type Language = {
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  native?: Maybe<Scalars['String']>,
  rtl?: Maybe<Scalars['Int']>,
};

export type Query = {
  continents?: Maybe<Array<Maybe<Continent>>>,
  continent?: Maybe<Continent>,
  countries?: Maybe<Array<Maybe<Country>>>,
  country?: Maybe<Country>,
  languages?: Maybe<Array<Maybe<Language>>>,
  language?: Maybe<Language>,
};


export type QueryContinentArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryCountryArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryLanguageArgs = {
  code?: Maybe<Scalars['String']>
};

export type CountriesQueryVariables = {};


export type CountriesQuery = ({ __typename?: 'Query' } & { countries: Maybe<Array<Maybe<({ __typename?: 'Country' } & Pick<Country, 'code' | 'name' | 'emoji' | 'currency'> & { continent: Maybe<({ __typename?: 'Continent' } & Pick<Continent, 'name'>)>, languages: Maybe<Array<Maybe<({ __typename?: 'Language' } & Pick<Language, 'name' | 'native'>)>>> })>>> });

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export const CountriesDocument = gql`
    query Countries {
  countries {
    code
    name
    emoji
    continent {
      name
    }
    currency
    languages {
      name
      native
    }
  }
}
    `;

      export const CountriesComponent = (props: Omit<Omit<ReactApollo.QueryProps<CountriesQuery, CountriesQueryVariables>, 'query'>, 'variables'> & { variables?: CountriesQueryVariables }) => (
        <ReactApollo.Query<CountriesQuery, CountriesQueryVariables> query={CountriesDocument} {...props} />
      );

export type CountriesProps<TChildProps = {}> = Partial<ReactApollo.DataProps<CountriesQuery, CountriesQueryVariables>> & TChildProps;
export function withCountries<TProps, TChildProps = {}>(operationOptions?: ReactApollo.OperationOption<
  TProps,
  CountriesQuery,
  CountriesQueryVariables,
  CountriesProps<TChildProps>>) {
    return ReactApollo.withQuery<TProps, CountriesQuery, CountriesQueryVariables, CountriesProps<TChildProps>>(CountriesDocument, operationOptions);
};