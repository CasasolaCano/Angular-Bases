import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeterComponent } from './meterComponent/meter.component';


@NgModule({
    declarations: [
        MeterComponent
    ],
    exports: [
        MeterComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MeterModule {

}