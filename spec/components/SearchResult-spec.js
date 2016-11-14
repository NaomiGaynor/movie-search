import jQuery from 'jquery';
import SearchResult from '../../src/components/SearchResult';

describe('SearchResult Module', () => {
  let instance;
  const Model = {
    image_path: 'some/path',
    original_title: 'some title',
    overview: 'some overview'
  };

  beforeEach(() => {
    jQuery('body').html('');
    instance = new SearchResult({
      $parent: jQuery('body'),
      model: Model
    });
  });

  describe('#SearchResult', () => {
    describe('.render', () => {
      it('should append search result', () => {
        expect(jQuery('body').children().length).toBe(0);

        instance.render();

        expect(jQuery('body').children()[0].className).toBe('result-container');
      });

      it('should contain an image with image_path from model', () => {
        instance.render();

        const imageSrc = jQuery('body').find('.poster-image').attr('src');

        expect(imageSrc).toEqual(instance.model.image_path);
      });

      it('should render title from model', () => {
        instance.render();

        const titleValue = jQuery('body').find('.film-title').text();

        expect(titleValue).toEqual(instance.model.original_title);
      });

      it('should render description from model', () => {
        instance.render();

        const descriptionValue = jQuery('body').find('p').text();

        expect(descriptionValue).toEqual(instance.model.overview);
      });

      it('should call destroy', () => {
        spyOn(instance, 'destroy');

        instance.render();

        expect(instance.destroy).toHaveBeenCalled();
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
