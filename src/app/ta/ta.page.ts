import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-ta',
  templateUrl: './ta.page.html',
  styleUrls: ['./ta.page.scss'],
})
export class TAPage implements OnInit {

  currentimage: any;
  projectname: '';
  task: '';
  date: '';
  location: '';
  amount: '';
  constructor(public camera: Camera, public email: EmailComposer) { }

  ngOnInit() {
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentimage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log('Camera issue:' + err);
    });
  }

  send() {
    const email = {
      to: 'manju.yadav@gen-xt.com',
      cc: 'shikha.katoch@gen-xt.com',
      attachment: this.currentimage,
      subject: 'Saturday Workday',
      body: 'Client Location' + this.location + '\nProject name: ' +  this.projectname + '\nDate' + this.date + '\nAmount' + this.amount,
      isHtml: true
    };

    this.email.open(email);
  }

}
