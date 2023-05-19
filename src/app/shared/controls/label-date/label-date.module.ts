import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LabelDateComponent } from './label-date.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [LabelDateComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    exports: [LabelDateComponent],
    providers: [DatePipe],
})
export class LabelDateModule {}
