import SearchModel from '../../src/models/SearchModel';

describe('SearchModel Module', () => {
  const Model = {
    poster_path: '/some/path'
  };
  describe('#SearchModel', () => {
    it('should create mdoel with image path', () => {
      const m = new SearchModel(Model);

      expect(m.image_path).toBe('http://image.tmdb.org/t/p/w185/some/path');
    });
  });
});
