import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { fetchImg } from '../../servises/APIservise';
import { scroll, scrollOptions } from '../../servises/Scroll';
import { ImageGalleryList } from 'components/ImageGalleryList/ImageGalleryList';
import { Spinner } from 'components/UI/Spinner';
import { Error } from '../UI/Error';
import { Button } from '../UI/Button';

const INITIAL_STATE = {
  images: [],
  currentPage: 1,
  isLoading: false,
  totalPhotos: null,
  showButton: false,
  error: null,
};

export class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
  };

  state = INITIAL_STATE;

  handleLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  loadItems = async (query, currentPage) => {
    try {
      this.setState({ isLoading: true });

      const data = await fetchImg(query, currentPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        totalPhotos: data.totalHits,
        showButton: currentPage < Math.ceil(data.totalHits / 12) ? true : false,
      }));
    } catch {
      this.setState({
        error: `"${query}" doesn't exist, or check your internet connection!`,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, images } = this.state;
    const { query } = this.props;
    if (prevProps.query !== query) {
      this.setState(INITIAL_STATE);
    }
    if (prevProps.query !== query || prevState.currentPage !== currentPage) {
      this.loadItems(query, currentPage);
    }
    if (prevState.images.length < images.length) {
      scroll.scrollToBottom(scrollOptions);
    }
  }

  render() {
    const { images, isLoading, error, totalPhotos, showButton } = this.state;
    return (
      <>
        {error && <Error>{error}</Error>}
        {totalPhotos === 0 && <Error> {'Please, enter correct query!'}</Error>}
        {images.length > 0 && <ImageGalleryList images={images} />}
        {isLoading && <Spinner />}
        {showButton && <Button onClick={this.handleLoadMore} />}
      </>
    );
  }
}
