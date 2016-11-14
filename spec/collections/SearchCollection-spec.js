import SearchCollection from '../../src/collections/SearchCollection';

describe('SearchCollection Module', () => {
  describe('#SearchCollection', () => {
    it('should be instance of array', () => {
      const c = new SearchCollection({
        results: [{ model1: 'model' }, { model2: 'model' }]
      });

      expect(c instanceof Array).toBe(true);
    });
  });
});
