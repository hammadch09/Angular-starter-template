import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatButtonComponent } from './flat-button.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [FlatButtonComponent],
    imports: [CommonModule, MatButtonModule, RouterModule],
    exports: [FlatButtonComponent],
})
export class FlatButtonModule {}
