import jQuery from 'jquery';
import init from '../src/init';
import Root from '../src/components/Root';

describe('Init Module', () => {
  beforeEach(() => {
    jQuery('body').html('');
  });

  describe('#init', () => {
    it('should render ROOT', () => {
      spyOn(Root.prototype, 'render');

      init();

      expect(Root.prototype.render).toHaveBeenCalled();
    });

    it('should append ROOT to body', () => {
      expect(jQuery('body').children().length).toBe(0);

      init();

      expect(jQuery('body').children()[0].className).toBe('wrapper');
    });
  });
});
