import jQuery from 'jquery';
import SearchCollection from '../collections/SearchCollection';

export default function getSearchCollection(url) {
  return new Promise((resolve, reject) => { // eslint-disable-line
    return jQuery.ajax({
      type: 'GET',
      url,
      contentType: 'application/json',
      dataType: 'jsonp',
      success: resolve,
      error: reject
    });
  }).then(res => new SearchCollection(res));
}
