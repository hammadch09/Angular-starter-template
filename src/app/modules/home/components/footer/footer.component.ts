import { Component } from '@angular/core';
import { ThemeService } from '@app/core/services';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    constructor(public themeService: ThemeService) {}
}
