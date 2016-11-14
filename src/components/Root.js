/**
 * Components like Loader, Search, List, Details
 */

import jQuery from 'jquery';
import Search from './Search';

export default class Root {
  constructor({ $parent }) {
    this.$parent = $parent;
  }

  render() {
    this.$parent.html('');

    const wrapper = jQuery('<div class="wrapper" />');
    this.searchContainer = jQuery('<div class="search-container" />');
    this.searchResults = jQuery('<div class="search-results" />');

    wrapper.append(this.searchContainer);
    wrapper.append(this.searchResults);

    this.$parent.append(wrapper);
    this.renderSearch();
  }

  renderSearch() {
    const searchContainer = this.searchContainer;
    const searchComponent = new Search({
      $parent: searchContainer
    });

    searchComponent.render();
  }
}
