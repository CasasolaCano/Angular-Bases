import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public title:string = 'Contador App';
  meter: number = 10;

  
  aggregate(value: number) {

    this.meter += value;
  }
}
