import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {


  username: any;
  selecteditem = '';
  constructor( public router: Router, public alert: AlertController) { }

  ngOnInit() {}

  async logout() {
    const alert = await this.alert.create({
      header: 'LOG OUT',
     // subHeader: 'Subtitle',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
              this.router.navigate(['intoduction']);
          }
        }
      ]
    });

    await alert.present();
  }


  public onitemselection(selecteditem) {
    if (selecteditem === 'saturday') {
     this.router.navigate(['saturday']);
    } else if (selecteditem === 'TA') {
      this.router.navigate(['ta']);
    }
  }


}
