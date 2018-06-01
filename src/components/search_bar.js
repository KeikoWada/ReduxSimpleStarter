import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // <- Object
  }

  render() {
    // return <input onChange={this.onInputChange} />;
    return (
      <div>
        <input
        //control conponent
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}
// event handler
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
// }

export default SearchBar;
