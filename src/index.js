import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = "";

YTSearch({key: API_KEY, term: "surfing"}, function(data){
  console.log(data);
})

// create a new component
// this will produce HTML

// this begins to form a tree of components
class App extends Component {
  render(){
    return (<div>
      <SearchBar />
    </div>);
  }
}

// put this in the DOM
ReactDOM.render(<SearchBar />, document.querySelector(".container"));
