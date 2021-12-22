import { Children, Component } from 'react';
import { photosApi } from '../../shared/photos';

class ImageGallery extends Component {
  state = { gallery: null };

  //   console.log(this.props);

  //   searchPhotos = ((_page = 1), q);
  // const show = (!!this.state.gallery.length && "Hallo!");
  //  let elements = ``;

  // componentDidMount() {
  //   photosApi.searchPhotos((_page = 1), q);
  // }

  render() {
    console.log(this.props);

    return <ul className="gallery">{this.state.gallery && <li>Hallo!</li>}</ul>;
  }
}

export default ImageGallery;
