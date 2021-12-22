import { Component } from 'react';

import Searchbar from './components/Searchbar';
import Loader from './components/Loader';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGallery/ImageGalleryItem';

import './App.css';

class App extends Component {
  state = {
    gallery: [],
    querySubmited: '',
    page: 1,
  };

  handleSubmit = (query, newgallery) => {
    // console.log(query);
    this.setState({ querySubmited: query });
    // this.setState(prevstate => ({
    //   gallery: [...prevstate.gallery, ...newgallery],
    // }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery gallery={this.state.gallery} />
        <Loader />
      </div>
    );
  }
}

export default App;
