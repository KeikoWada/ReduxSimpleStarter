import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// google youtube API_KEY
const API_KEY = 'AIzaSyDb0nunIa_PkItmSDsSo2cnyqY6VSGnmK8'

// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML, and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
