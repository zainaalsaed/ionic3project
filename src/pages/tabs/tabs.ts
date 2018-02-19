import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { IonicPage, NavController } from 'ionic-angular';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {

 // tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = RegisterPage;

  constructor(public navCtrl: NavController) {

  }
}
