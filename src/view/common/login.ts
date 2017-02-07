import {Redirect, Router, RedirectToRoute} from 'aurelia-router';

export class Login {
    private static inject: any = [Router];
    router: Router;

    constructor(r: Router) {
        this.router = r;
    }

    login() {
        this.router.navigate('dashboard');
    }
}
