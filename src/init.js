import jQuery from 'jquery';
import Root from './components/Root';

export default function init() {
  const rootComponent = new Root({
    $parent: jQuery('body')
  });

  rootComponent.render();
}

