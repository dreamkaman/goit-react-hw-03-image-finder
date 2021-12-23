import { Component } from 'react';

// import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);

    // this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchbarButton}></button>

          <input
            onChange={this.handleChange}
            className={styles.searchbarInput}
            type="text"
            autoComplete="false"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
        </form>
      </header>
      //.......
      // <div className={styles.searchbar}>
      //   {/* <img src="../../images/search-lens.svg" alt="fck" /> */}
      //   <label className={styles.searchbarLabel} htmlFor="search">
      //     <svg className={styles.searchbarSvg}>
      //       <use width="20" height="20" href="../../images/search-lens.svg"></use>
      //     </svg>
      //   </label>
      //   <input
      //     onChange={this.handleChange}
      //     className={styles.searchbarInput}
      //     type="text"
      //     name="search"
      //     placeholder=""
      //   />
      // </div>
    );
  }
}

export default Searchbar;
