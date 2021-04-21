import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  power: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  new:Character = {
    name: 'Trunks',
    power: 7000
  }

  add() {
    console.log(this.new);
  }
}
