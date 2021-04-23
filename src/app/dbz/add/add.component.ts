import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{

  constructor(private dbzService: DbzService) { }

  @Input() new:Character = {
    name:'',
    power: 0
  };

  //Siempre se especifica el tipo en el evento que vamos a mandar, en este caso de 
  //tipo character, si no sabemos que tipo de dato estamos enviando, colocamos any
  //aunque esto es una mala práctica. Siempre deberiamos tener claro con que tipo de 
  //dato estamos trabajando
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  add() {

    if(this.new.name.trim().length === 0) {
      return;
    }

    // this.onNewCharacter.emit(this.new);

    this.dbzService.addCharacter(this.new);

    this.new = {
      name: '',
      power: 0
    }

  }

}
