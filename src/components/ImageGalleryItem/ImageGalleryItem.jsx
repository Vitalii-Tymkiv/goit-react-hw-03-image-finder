import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { ImageModal } from '../UI/ImageModal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <Item>
          <Image
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.toggleModal}
          />
        </Item>
        {showModal && (
          <ImageModal image={image} onCloseModal={this.toggleModal} />
        )}
      </>
    );
  }
}
