import jQuery from 'jquery';

export default class Search {
  constructor({ $parent }) {
    this.$parent = $parent;
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
  }

  destroy() {
    this.$parent.html('');
  }
}
