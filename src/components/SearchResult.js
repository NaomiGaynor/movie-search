import jQuery from 'jquery';

export default class SearchResult {
  constructor({ $parent, model }) {
    this.$parent = $parent;
    this.model = model;
  }

  render() {
    this.destroy();

    const container = jQuery('<div class="result-container"/>');
    const image = jQuery(`<img class="poster-image" src="${this.model.image_path}">`);
    const title = jQuery(`<h2 class="film-title">${this.model.original_title}</h2>`);
    const description = jQuery(`<p>${this.model.overview}</p>`);

    container.append(image);
    container.append(title);
    container.append(description);

    this.$parent.append(container);
  }

  destroy() {
    this.$parent.html('');
  }
}
