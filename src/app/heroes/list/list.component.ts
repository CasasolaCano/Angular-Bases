import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {


  heroes:string[] = ['Spiderman', 'Thor', 'Hulk', 'Ironman', 'Antman'];
  delHeroe: string = '';
  


  deleteHeroeIndex(index:number): void {
    this.heroes.splice(index, 1);
  }

  deleteFirstHeroe(): void {
    this.delHeroe = this.heroes.shift() || '';
    
  }
}
