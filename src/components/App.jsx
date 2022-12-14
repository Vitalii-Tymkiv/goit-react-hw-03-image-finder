import { Component } from 'react';
import { Layout } from './UI/Layout';
import { GlobalStyle } from './GlobalStyle';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    query: '',
  };

  handleSubmitSearchBar = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <Layout>
        <SearchBar onSubmit={this.handleSubmitSearchBar} />
        <ImageGallery query={query} />
        <GlobalStyle />
      </Layout>
    );
  }
}
