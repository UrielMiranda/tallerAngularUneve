import { Component } from '@angular/core';

@Component({
  selector: 'app-uneve',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hola';
  hello = "Friends";
  count = 0;

  suma(){
    this.count = this.count + 1;
  }

  resta(){
    this.count = this.count - 1;
  }
}
