import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Country from './components/Country';


class App extends React.Component {
  state = {
    name: undefined,
    population: undefined,
    capital: undefined,
    region: undefined,
    flag: undefined,
    error: undefined,
  }

  getCountry = async (e) => {
    e.preventDefault();
    const country = e.target.elements.name.value;
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
      .then(
        data => {
          return data.json();
        })
      .then((data) => {
        if (data.status !== 404) {
          this.setState({
            name: data[0].name,
            population: data[0].population,
            capital: data[0].capital,
            region: data[0].region,
            flag: data[0].flag,
            error: "",
          });
        }
        else {
          this.throwError();
        }
      })
  }

  throwError = () => {
    this.setState({
      name: undefined,
      population: undefined,
      capital: undefined,
      region: undefined,
      flag: undefined,
      error: `Not found! Try once more.`,
    });
  }

  render() {
    return (
      <div className="country-app">
        <div className="container">
          <Title />
          <Form getCountry={this.getCountry} />
          <Country
            name={this.state.name}
            population={this.state.population}
            capital={this.state.capital}
            region={this.state.region}
            flag={this.state.flag}
            error={this.state.error}
          />
        </div>
      </div>

    );
  }
};

export default App;