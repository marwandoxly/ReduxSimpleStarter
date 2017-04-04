import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = "";

// create a new component
// this will produce HTML

// this begins to form a tree of components
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    // move it here to get some search terms
    YTSearch({key: API_KEY, term: "surfing"}, (videos) => {
      this.setState({ videos }); // this becomes this.setState({videos: videos})
    })
  }

  render(){
    return (<div>
      <SearchBar />
    </div>);
  }
}

// put this in the DOM
ReactDOM.render(<SearchBar />, document.querySelector(".container"));
