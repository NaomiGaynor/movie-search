import jQuery from 'jquery';
import Search from '../../src/components/Search';

describe('Search Module', () => {
  let instance;

  beforeEach(() => {
    jQuery('body').html('');
    instance = new Search({
      $parent: jQuery('body'),
      onSearchResults: jasmine.any(Function)
    });
  });

  describe('#Search', () => {
    describe('.render', () => {

      it('should call destroy', () => {
        spyOn(instance, 'destroy');

        instance.render();

        expect(instance.destroy).toHaveBeenCalled();
      });

      it('should append onto input search', () => {
        expect(jQuery('body').children().length).toBe(0);

        instance.render();

        expect(jQuery('body').children()[0].className).toBe('search-form__container');
      });

      it('should bind events', () => {
        spyOn(instance, 'bindEvents');

        instance.render();

        expect(instance.bindEvents).toHaveBeenCalled();
      });
    });

    describe('.destroy', () => {
      beforeEach(() => {
        spyOn(instance, 'unbindEvents');
      });

      it('should unbind events', () => {
        instance.destroy();

        expect(instance.unbindEvents).toHaveBeenCalled();
      });

      it('should reset html', () => {
        instance.render();

        expect(jQuery('body').children().length).toBeGreaterThan(0);

        instance.destroy();

        expect(jQuery('body').children().length).toBe(0);
      });
    });

    describe('.buildSearchRequest', () => {
      it('should create url request from searchinput val', () => {
        spyOn(jQuery.fn, 'val').and.returnValue('someInput');

        expect(instance.buildSearchRequest()).toBe('https://api.themoviedb.org/3/search/movie?api_key=f48a3bd49fd7e66b556a04ec43f6980b&query=someInput');
      });
    });
  });
});
