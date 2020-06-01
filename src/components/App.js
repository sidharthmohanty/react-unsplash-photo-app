import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends Component {
  state = {
    images: [],
  };
  getQuery = async (searchQuery) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: searchQuery,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar getQuery={this.getQuery} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
