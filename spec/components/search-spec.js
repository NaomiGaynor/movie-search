import jQuery from 'jquery';
import Search from '../../src/components/Search';

describe('Search Module', () => {
  let instance;

  beforeEach(() => {
    jQuery('body').html('');
    instance = new Search({
      $parent: jQuery('body')
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
    });

    describe('.destroy', () => {
      it('should reset html', () => {
        instance.render();

        expect(jQuery('body').children().length).toBeGreaterThan(0);

        instance.destroy();

        expect(jQuery('body').children().length).toBe(0);
      });
    });
  });
});
