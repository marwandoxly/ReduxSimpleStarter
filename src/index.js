import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "";

// create a new component
// this will produce HTML

// this begins to form a tree of components
const App = () => {
  return (<div>
    <SearchBar />
  </div>);
}

// put this in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
ReactDOM.render(<SearchBar />, document.querySelector(".searchbar"));
