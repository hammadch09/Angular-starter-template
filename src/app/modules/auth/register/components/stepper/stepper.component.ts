import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
    stepperOrientation!: Observable<StepperOrientation>;

    firstFormGroup = this.fb.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this.fb.group({
        secondCtrl: ['', Validators.required],
    });
    thirdFormGroup = this.fb.group({
        thirdCtrl: ['', Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        public breakpointObserver: BreakpointObserver
    ) {
        this.stepperOrientation = breakpointObserver
            .observe('(min-width: 800px)')
            .pipe(
                map(({ matches }: any) => (matches ? 'horizontal' : 'vertical'))
            );
    }
}
