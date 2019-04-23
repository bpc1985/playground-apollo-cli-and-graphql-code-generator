import React, { Component } from 'react';
import { CountriesComponent } from './generated/apolloComponents';
import './App.css';

const generateLanguages = (languages: any): String => {
  if (languages.length == 0) {
    return '';
  }
  return languages
          .map((language: any) => language!.name )
          .join(', ');
}

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
        <CountriesComponent>
        {({ data, loading, error }) => {
          if (loading) return null;
          if (error) return null;
          if (!data || !data.countries) return null;
          const countries = data.countries;
          return (
            <React.Fragment>
              {countries.map((country, index: any) => (
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
        </CountriesComponent>
      </table>
    )
  }
}

export default App;