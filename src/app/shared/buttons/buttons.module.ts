import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatButtonModule } from './flat-button/flat-button.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, FlatButtonModule],
    exports: [FlatButtonModule],
})
export class ButtonsModule {}
