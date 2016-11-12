/**
 * Components like Loader, Search, List, Details
 */

import jQuery from 'jquery';

export default class Root {
  constructor({ $parent }) {
    this.$parent = $parent;
  }

  render() {
    this.$parent.html('');
    this.$parent.append(jQuery('<div class="wrapper"></div>'));
  }
}
