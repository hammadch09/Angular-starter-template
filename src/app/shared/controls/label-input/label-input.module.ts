import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelInputComponent } from './label-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [LabelInputComponent],
    imports: [CommonModule, MatFormFieldModule, MatInputModule],
    exports: [LabelInputComponent],
})
export class LabelInputModule {}
