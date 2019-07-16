import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intoduction',
  templateUrl: './intoduction.page.html',
  styleUrls: ['./intoduction.page.scss'],
})
export class IntoductionPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }
   login() {
  this.router.navigate(['login']);
}
// ionViewDidEnter() {
//   // tslint:disable-next-line: only-arrow-functions
//   document.addEventListener('backbutton', function(e) {
//     console.log('disable back button');
//   }, false);
// }
}
