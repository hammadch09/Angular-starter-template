import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-flat-button',
    templateUrl: './flat-button.component.html',
    styleUrls: ['./flat-button.component.scss'],
})
export class FlatButtonComponent {
    @Input() class!: string;
    @Input() isSecondary!: boolean;
    @Input() text!: string;
    @Input() isImage!: boolean;
    @Input() imagePath!: string;
    @Input() imageAlt!: string;
    @Input() routerLink!: string;
    @Input() type!: 'button' | 'submit';

    constructor() {
        this.isSecondary = false;
        this.isImage = false;
        this.type = 'button';
    }
}
