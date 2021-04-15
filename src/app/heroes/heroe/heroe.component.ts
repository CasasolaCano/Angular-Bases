import { Component } from "@angular/core";


@Component({
    selector: 'heroe-component',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent {

    name:string = 'Ironman';
    age: number = 45;

    get capitalizedName() {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name}  -  ${this.age}`;
    }
}