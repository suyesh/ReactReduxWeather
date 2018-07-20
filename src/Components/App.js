import React, { Component, Fragment } from 'react';
import SearchBar from '../Containers/searchBar'
import WeatherList from '../Containers/WeatherList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <SearchBar/>
          <WeatherList/>
        </div>
      </Fragment>
    );
  }
}

export default App;
