import { Component } from '@angular/core';

@Component({
    selector: 'meter-component',
    templateUrl: 'meter.component.html'
})

export class MeterComponent {

    public title:string = 'Contador App';  
    meter: number = 10;
    base: number = 5;
    
    aggregate(value: number) {

        this.meter += value;
    }
}