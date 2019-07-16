import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Email = '';
  password = '';

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public alert: AlertController) { }

  ngOnInit() {
  }

  async login() {
     const{Email, password} = this;
     try {
          const res = await this.afAuth.auth.signInWithEmailAndPassword(Email , password);
          this.showAlert('Welcome', `${Email}`);
          this.router.navigate(['add']);
     } catch (err) {
         console.dir(err);
         if (err.code === 'auth/user-not-found') {
          this.showAlert('Failure', ' User Not Found, please sign in' );
          this.router.navigate(['register']);
      } else if (err.code === 'auth/wrong-password') {
             this.showAlert('Failure', 'Wrong Password' );
             this.router.navigate(['login']);
      }

     }

  }

  async showAlert(header: string, message: string) {

    const alert = await this.alert.create({
      header,
      message,
      buttons: ['Ok']
    });

    await alert.present();
  }
}
