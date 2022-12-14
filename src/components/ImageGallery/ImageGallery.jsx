import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { fetchImg } from '../../servises/APIservise';
// import { Button } from '../UI/Button';
import { scroll, scrollOptions } from '../../servises/Scroll';
import { ImageGalleryList } from 'components/ImageGalleryList/ImageGalleryList';

export class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    currentPage: 1,
    isLoading: false,
    totalPhotos: null,
    showButton: false,
    error: null,
  };

  async componentDidUpdate(prevProps) {
    const { currentPage } = this.state;
    const { query } = this.props;
    if (prevProps.query !== query) {
      try {
        this.setState({ isLoading: true });

        const data = await fetchImg(query, currentPage);
        console.log(data);
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          totalPhotos: data.totalHits,
          showButton:
            currentPage < Math.ceil(data.totalHits / 12) ? true : false,
        }));
      } catch {
        this.setState({
          error: `"${query}" doesn't exist, or check your internet connection!`,
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
    scroll.scrollToBottom(scrollOptions);
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return <ImageGalleryList images={images} />;
  }
}
