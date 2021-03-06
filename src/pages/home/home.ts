import { Component ,ViewChild  } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseError } from '@firebase/util';
import {TabsPage}  from '../tabs/tabs';
import * as firebase from 'firebase/app';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('username') user;
	@ViewChild('password') password;


    constructor( private afAuth: AngularFireAuth, private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad RegisterPage');
    }
  
   


    alert(message: string) {
      this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['OK']
      }).present();
    }
  
  
   /* registerUser() {
      this.fire.auth.createUserWithEmailAndPassword(this.user.value + '@domian.xta', this.password.value)
      .then(data => {
        console.log('got data ', data);
       this.alert('Registered!');
      })
      
    
      
      .catch((error:FirebaseError) => {
        console.log('got an error ', error);
       this.alert(error.message);
      });
      console.log('Would register user with ', this.user.value, this.password.value);
    }
    */

    
    signInWithFacebook() {
    this.afAuth.auth .signInWithPopup(new firebase.auth.FacebookAuthProvider()) .then(res => console.log(res));
  }

  regEm() {

  this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
  .then( data => {
    console.log('got some data', this.fire.auth.currentUser);
    this.alert('Success! You\'re logged in');
    this.navCtrl.setRoot( TabsPage );
    // user is logged in
  })
  .catch( error => {
    console.log('got an error', error);
    this.alert(error.message);
  })
  console.log('Would sign in with ', this.user.value, this.password.value);
  
}

  registerUser1() {
    this.navCtrl.push(TabsPage);
  }

}
