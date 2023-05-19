import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelInputModule } from './label-input/label-input.module';
import { LabelSelectModule } from './label-select/label-select.module';
import { LabelPasswordModule } from './label-password/label-password.module';
import { LabelDateModule } from './label-date/label-date.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LabelInputModule,
        LabelSelectModule,
        LabelPasswordModule,
        LabelDateModule,
    ],
    exports: [
        LabelInputModule,
        LabelSelectModule,
        LabelPasswordModule,
        LabelDateModule,
    ],
})
export class ControlsModule {}
