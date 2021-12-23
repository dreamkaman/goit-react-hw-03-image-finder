import { Component } from 'react';
import { photosApi } from './shared/services/photos';

import Searchbar from './components/Searchbar';
import Loader from 'react-loader-spinner';
// import Loader from './components/Loader';
import ImageGallery from './components/ImageGallery';
// import ImageGalleryItem from './components/ImageGallery/ImageGalleryItem';
import Button from './components/Button';
import Modal from './components/Modal';

import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    gallery: [],
    querySubmited: '',
    page: 1,
    loadMore: false, //pereproverit!
    loading: false,
    showModal: false,
    // currentId: null, //ne uveren
    currentLargeImageURL: '',
    currentTags: '',
  };

  componentDidUpdate(prevprops, prevstate) {
    console.log('App did update');
    console.log('this.state.querySubmited - ', this.state.querySubmited);
    console.log('prevstate.querySubmited -', prevstate.querySubmited);
    // console.log('prevstate', prevstate);
    // console.log('this.state', this.state);

    if (prevstate.querySubmited && prevstate.querySubmited !== this.state.querySubmited) {
      console.log('Query changed');

      this.setState({ gallery: [], page: 1 });
    } //end if
    if (this.state.loading) {
      const { page, querySubmited } = this.state;
      // console.log(query);
      photosApi.searchPhotos(page, querySubmited).then(res => {
        const newgallery = res.data.hits;

        this.setState(prevstate => ({
          gallery: [...prevstate.gallery, ...newgallery],
          // querySubmited: query,
          page: prevstate.page + 1,
          loading: false,
        }));
      });
    }

    // console.log(res.data.hits););

    // this.setState({ querySubmited: query });
  }

  handleSubmit = query => {
    this.setState({
      querySubmited: query,
      loading: true,
    });
  };

  // handleLoadMore = () => {
  //   const { querySubmited, page } = this.state;
  //   // console.log(query);

  //   photosApi.searchPhotos(page, querySubmited).then(res => {
  //     console.log('Works');

  //     const newgallery = res.data.hits;

  //     this.setState(prevstate => ({
  //       gallery: [...prevstate.gallery, ...newgallery],
  //       page: prevstate.page + 1,
  //     }));
  //   });
  // };
  handleLoadMore = () => {
    this.setState({ loading: true });
  };

  toggleModal = id => {
    this.setState(prevstate => ({ showModal: !prevstate.showModal }));
    this.getValuesById(id);
  };

  getValuesById = id => {
    const currentImage = this.state.gallery.find(image => image.id === id);
    if (currentImage) {
      this.setState({
        currentLargeImageURL: currentImage.largeImageURL,
        currentTags: currentImage.tags,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <ImageGallery gallery={this.state.gallery} onShowModal={this.toggleModal} />
        {this.state.loading && (
          <Loader type="Bars" color="#00BFFF" height={100} width={100} timeout={1000} />
        )}
        {!!this.state.gallery.length && <Button onClick={this.handleLoadMore} />}
        {this.state.showModal && (
          <Modal closeModal={() => this.toggleModal()}>
            <img src={this.state.currentLargeImageURL} alt={this.state.currentTags} />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
