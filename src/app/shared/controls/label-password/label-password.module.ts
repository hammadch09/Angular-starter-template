import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelPasswordComponent } from './label-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [LabelPasswordComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [LabelPasswordComponent],
})
export class LabelPasswordModule {}
