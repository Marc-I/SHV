import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'SHV/FSVL - Schweizerischer Hängegleiter Verband';
    config.map([
      { route: ['', 'home'], name: 'home',      settings: { icon: '', },
        moduleId: 'view/common/home',      nav: true, title: 'home' },
      // { route: ['kontakt'], name: 'kontakt',      settings: { icon: '', },
      //   moduleId: 'http://www.shv-fsvl.ch/verband/kontakt/',      nav: true, title: 'kontakt' },
      { route: ['login'], name: 'login',      settings: { icon: '', },
        moduleId: 'view/common/login',      nav: false, title: 'e-learning' },
      { route: ['dashboard'], name: 'dashboard',  settings: { icon: '', },
        moduleId: 'view/common/dashboard',  nav: false, title: 'e-learning' },
      { route: ['settings'], name: 'settings',    settings: { icon: 'fa-cog', },
        moduleId: 'view/common/settings',   nav: true,  title: 'Einstellungen' },
    ]);

    this.router = router;
  }
}
