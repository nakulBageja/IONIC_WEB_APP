import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-saturday',
  templateUrl: './saturday.page.html',
  styleUrls: ['./saturday.page.scss'],
})
export class SaturdayPage implements OnInit {

  projectname: '';
  task: '';
  date: '';

  constructor(public email: EmailComposer) { }

  ngOnInit() {
  }

  send() {
    const email = {
      to: 'manju.yadav@gen-xt.com',
      cc: 'shikha.katoch@gen-xt.com',
      subject: 'Saturday Workday',
      body: 'Project name: ' +  this.projectname + '\nTask to do' + this.task + '\nDate' + this.date,
      isHtml: true
    };

    this.email.open(email);
  }
}
