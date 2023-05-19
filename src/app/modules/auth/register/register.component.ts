import { Component } from '@angular/core';
import { ThemeService } from '@app/core/services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    hide: boolean = false;
    constructor(public themeService: ThemeService) {}
}
