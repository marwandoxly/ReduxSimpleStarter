import React, {Component} from "react";

class SearchBar extends Component {
  render() {
    return <input onChange={(e) => console.log(e.target.value)} />;
  }

  /*
  onInputChange(e) { // or handleInputChange
    console.log(e.target.value);
  }
  */
}

export default SearchBar;
