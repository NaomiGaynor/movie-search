import jQuery from 'jquery';
import { MOVIE_DB_URL, API_KEY } from '../constants';
import getSearchCollection from '../dataHandlers/getSearchCollection';

export default class Search {
  constructor({ $parent }) {
    this.$parent = $parent;
  }

  bindEvents() {
    this.$parent.on('submit', 'form', this.onSearch.bind(this));
  }

  unbindEvents() { // eslint-disable-line
    jQuery('.search__button').off('click');
  }

  render() {
    this.destroy();

    const container = jQuery('<div class="search-form__container"/>');
    const form = jQuery('<form />');
    const inputSearch = jQuery('<input type="text" class="search" />');
    const submitButton = jQuery('<button class="search__button">Search</button>');

    form.append(inputSearch);
    form.append(submitButton);
    container.append(form);

    this.$parent.append(container);

    this.bindEvents();
  }

  destroy() {
    this.unbindEvents();
    this.$parent.html('');
  }

  onSearch(evt) {
    evt.preventDefault();
    const url = this.buildSearchRequest();

    getSearchCollection(url);
  }

  buildSearchRequest() {
    const searchInput = jQuery('.search').val();
    const query = `&query=${searchInput}`;
    const urlRequest = [MOVIE_DB_URL, API_KEY, query].join('');

    return urlRequest;
  }

}
