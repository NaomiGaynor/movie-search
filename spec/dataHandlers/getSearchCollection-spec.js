import jQuery from 'jquery';
import getSearchCollection from '../../src/dataHandlers/getSearchCollection';
import SearchCollection from '../../src/collections/SearchCollection';

describe('getSearchCollection Module', () => {
  describe('#getSearchCollection', () => {
    it('should make ajax request', () => {
      spyOn(jQuery, 'ajax');

      getSearchCollection();

      expect(jQuery.ajax).toHaveBeenCalled();
    });

    it('should instantiate new SearchCollection', () => {
      spyOn(jQuery, 'ajax').and.callFake((args) => {
        args.success();
      });

      getSearchCollection().then((collection) => {
        expect(collection instanceof SearchCollection).toBe(true);
      });
    });
  });
});
