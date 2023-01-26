import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise_1_Creating_A_Template_Based_Form';
   location = {
    address: "01 BP 10 Lakota 01"
  }
  saveEvent(value:any) {
    console.log( value )
  }
}
