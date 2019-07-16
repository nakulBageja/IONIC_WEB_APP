import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  email = '';
  password = '';
  firstname = '';
  cpassword = '';
  designation = '';
  constructor(public afAuth: AngularFireAuth, public alert: AlertController,  public router: Router) { }

  ngOnInit() {}

  async register() {
    const { email, password, cpassword, firstname} = this;
    if (email === '') {
      this.showAlert('Error', 'Please fill all the fields');
    } else if (password === '') {
      this.showAlert('Error', 'Please fill all the fields');
    } else if ( password !== this.cpassword) {
         this.showAlert('Failure', 'Passwords do not match');
    } else {
    try {
        const res = this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        this.showAlert('Welcome', `${firstname}`);
        if (this.designation === 'employee') {this.router.navigate(['add']); } else {}

    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
       this.showAlert('Error', err.message);
      } else if (err.code === 'auth/invalid-email') {
        this.showAlert('Error', err.message);
      }
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

   public selecteddesignation(designation) {
     if (designation === 'employee') {
        designation = 'employee';
     } else if (designation === 'manager') {
      designation = 'manager';
   } else {
     this.showAlert('Error', 'Please fill all the fields');
   }
  }
}
