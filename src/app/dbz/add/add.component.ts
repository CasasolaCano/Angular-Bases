import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{

  constructor() { }

  @Input() new:Character = {
    name:'',
    power: 0
  };

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  add() {

    if(this.new.name.trim().length === 0) {
      return;
    }

    console.log(this.new);

    this.onNewCharacter.emit(this.new);

    this.new = {
      name: '',
      power: 0
    }

  }

}
