import { Component } from 'react';
import { photosApi } from './shared/services/photos';

import Searchbar from './components/Searchbar';
import Loader from './components/Loader';
import ImageGallery from './components/ImageGallery';
// import ImageGalleryItem from './components/ImageGallery/ImageGalleryItem';
import Button from './components/Button';

import './App.css';

class App extends Component {
  state = {
    gallery: [],
    querySubmited: '',
    page: 1,
    loadMore: 'false',
  };

  handleSubmit = query => {
    const { page } = this.state;
    // console.log(query);
    photosApi.searchPhotos(page, query).then(res => {
      const newgallery = res.data.hits;

      this.setState(prevstate => ({
        gallery: [...prevstate.gallery, ...newgallery],
        querySubmited: query,
        page: prevstate.page + 1,
      }));
    });
    // console.log(res.data.hits););

    // this.setState({ querySubmited: query });
  };

  handleLoadMore = () => {
    const { querySubmited, page } = this.state;
    // console.log(query);
    photosApi.searchPhotos(page, querySubmited).then(res => {
      console.log('Works');

      const newgallery = res.data.hits;

      this.setState(prevstate => ({
        gallery: [...prevstate.gallery, ...newgallery],
        page: prevstate.page + 1,
      }));
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery gallery={this.state.gallery} />
        {/* <Loader /> */}
        {!!this.state.gallery.length && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}

export default App;
