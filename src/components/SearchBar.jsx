import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getQuery(this.state.searchQuery);
  };

  render() {
    return (
      <div>
        <div className="ui segment form">
          <div className="field">
            <form onSubmit={(e) => this.onFormSubmit(e)}>
              <label htmlFor="search">Search image:</label>
              <input
                className="prompt"
                type="text"
                id="search"
                placeholder="Search..."
                value={this.state.searchQuery}
                onChange={(e) =>
                  this.setState({ searchQuery: e.currentTarget.value })
                }
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
