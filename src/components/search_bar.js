import React, {Component} from "react";

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' }; // this initializes the state for the SearchBar
  }

  render() {
    return <input onChange={(e) => this.setState({ term: e.target.value })} />;
  }

  /*
  onInputChange(e) { // or handleInputChange
    console.log(e.target.value);
  }
  */
}

export default SearchBar;
