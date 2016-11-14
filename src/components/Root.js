/**
 * Components like Loader, Search, List, Details
 */

import jQuery from 'jquery';
import Search from './Search';
import SearchResult from './SearchResult';

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

  /**
   * renderSearch
   * instantiate search component and render
   */
  renderSearch() {
    const searchContainer = this.searchContainer;
    const searchComponent = new Search({
      $parent: searchContainer,
      onSearchResults: this.onSearchResults.bind(this)
    });

    searchComponent.render();
  }

  /**
   * renderList
   * @param  {Object} search results
   * Instantiate Search Result component and render on Dom
   */
  renderList(results) {
    const searchResults = this.searchResults;
    const searchElements = results.map((m) => {
      const searchElement = jQuery('<div />');
      const resultComponent = new SearchResult({
        $parent: searchElement,
        model: m
      });

      resultComponent.render();
      return searchElement;
    });

    searchResults.append(...searchElements);
  }

  destroyList() {
    this.searchResults.html('');
  }

  onSearchResults(results) {
    this.destroyList();
    this.renderList(results);
  }
}
