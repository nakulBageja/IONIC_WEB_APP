import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddservicesService {

  private userarray: [''];
  constructor() { }

  getusernames() {
    return[...this.userarray ];
  }

}
