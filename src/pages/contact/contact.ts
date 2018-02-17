import { Component ,ViewChild  } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseError } from '@firebase/util';
//@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	@ViewChild('username') user;
	@ViewChild('password') password;

  
  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
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


  registerUser() {
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

}
