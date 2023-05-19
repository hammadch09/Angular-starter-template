import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelSelectComponent } from './label-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [LabelSelectComponent],
    imports: [CommonModule, MatFormFieldModule, MatIconModule, MatSelectModule],
    exports: [LabelSelectComponent],
})
export class LabelSelectModule {}
