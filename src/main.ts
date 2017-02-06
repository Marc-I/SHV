import 'bootstrap';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-animator-css');

  aurelia.start().then(() => aurelia.setRoot());
}
