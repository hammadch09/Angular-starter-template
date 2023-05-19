import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlatButtonModule } from '@app/shared/buttons/flat-button/flat-button.module';
import { LabelPasswordModule } from '@app/shared/controls/label-password/label-password.module';
import { LabelInputModule } from '@app/shared/controls/label-input/label-input.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    declarations: [RegisterComponent, StepperComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        LabelInputModule,
        LabelPasswordModule,
        FlatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatStepperModule,
    ],
})
export class RegisterModule {}
