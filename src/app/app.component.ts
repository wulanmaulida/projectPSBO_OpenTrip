import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: `app.html`
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(platform: Platform, private Splashscreen: SplashScreen, private statusBar: StatusBar) {
    platform.ready().then(() => {
     let env = this;
     env.nav.push(TabsPage);
     if(!this.isAlreadyLoggedIn()){
       console.log('not login yet, redirect to login page');
       env.nav.setRoot(LoginPage);
       Splashscreen.hide();
     }
     else{
       env.nav.setRoot(TabsPage);
       Splashscreen.hide();
     }
      statusBar.styleDefault();
    });
  }
  isAlreadyLoggedIn(){
    let user = window.localStorage.getItem('user');
    return user !== null &&  user !== undefined;
  }
}
