import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from '@app/core/services';
import { markFormGroupTouched } from '@app/shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    hide: boolean = true;

    loginForm!: FormGroup;

    constructor(public themeService: ThemeService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initLoginForm();
    }

    /** On Submit Login Form */
    onSubmit() {
        if (this.loginForm.valid) {
        } else {
            markFormGroupTouched(this.loginForm);
        }
    }

    /** Init Login Form */
    initLoginForm(): void {
        this.loginForm = this.fb.group({
            email: [
                null,
                {
                    updateOn: 'change',
                    validators: [Validators.required, Validators.email],
                },
            ],
            password: [
                null,
                {
                    updateOn: 'change',
                    validators: [Validators.required],
                },
            ],
        });
    }

    ngOnDestroy(): void {}
}
