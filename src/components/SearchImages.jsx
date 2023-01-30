import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import { fetchImages } from './services/posts-api';

class SearchImages extends Component {
  state = {
    items: [],
    search: '',
    loading: false,
    error: null,
    page: 1,
    total: 0
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const { hits, totalHits } = await fetchImages(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...hits],
        total: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.errorMessage });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { items, page, total } = this.state;
    const { searchImages, loadMore } = this;
    const isImages = Boolean(items.length);
    const totalPage = Math.ceil(total / 12);

    return (
      <>
        <Searchbar onSubmit={searchImages} />
        <ImageGallery items={items} />
        {isImages && page < totalPage && (
          <Button onLoadMore={loadMore} text={'Load more'} />
        )}
      </>
    );
  }
}

export default SearchImages;