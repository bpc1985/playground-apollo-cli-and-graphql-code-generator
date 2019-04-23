import React, { Component } from 'react';
import { Query } from 'react-apollo';
import countriesQuery from './queries/countriesQuery';
import { Countries, Countries_countries, Countries_countries_languages } from './queries/__generated__/Countries';
import './App.css';

const generateLanguages = (languages: (Countries_countries_languages | null)[] | null): String => {
  if (languages!.length == 0) {
    return '';
  }
  return languages!
          .map((language: Countries_countries_languages | null) => language!.name )
          .join(', ');
}

class CountriesQuery extends Query<Countries> {}

class App extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>Code</th>
          <th>Country</th>
          <th>Flag</th>
          <th>Continent</th>
          <th>Currency</th>
          <th>Languages</th>
        </tr>
        <CountriesQuery query={countriesQuery}>
        {({ data, loading, error }) => {
          if (loading) return null;
          if (error) return null;
          if (!data || !data.countries) return null;
          const countries: (Countries_countries | null)[] | null = data!.countries;
          return (
            <React.Fragment>
              {countries.map((country: Countries_countries | null, index: any) => (
                <tr key={index}>
                  <td>{country!.code}</td>
                  <td>{country!.name}</td>
                  <td>{country!.emoji}</td>
                  <td>{country!.continent!.name}</td>
                  <td>{country!.currency}</td>
                  <td>{generateLanguages(country!.languages)}</td>
                </tr>
              ))}
            </React.Fragment>
          );
        }}
        </CountriesQuery>
      </table>
    )
  }
}

export default App;