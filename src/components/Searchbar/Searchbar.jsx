import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../Searchbar/searchbar.module.scss';

class Searchbar extends Component {
  state = {
    search: ""
  }

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value});
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const {onSubmit} = this.props;
    onSubmit({...this.state});
    this.reset();
  }

  reset () {
    this.setState({
      search: ""
    })
  }

  render() {
    const {search} = this.state;
    const {handleChange, handleSubmit} = this;

    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.searchFormInput}
            onChange={handleChange}
            name="search"
            value={search}
            type="text"
            autoComplete='off'
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}