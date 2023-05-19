import { Component, OnDestroy } from '@angular/core';
import { ThemeService } from '@app/core/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-customizer-setting',
    templateUrl: './customizer-setting.component.html',
    styleUrls: ['./customizer-setting.component.scss'],
})
export class CustomizerSettingComponent implements OnDestroy {
    subscription: Subscription = new Subscription();

    isToggled: boolean = false;

    constructor(public themeService: ThemeService) {
        this.subscription = this.themeService.isToggled$.subscribe(
            (isToggled: boolean) => {
                this.isToggled = isToggled;
            }
        );
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    toggleRightSidebarTheme() {
        this.themeService.toggleRightSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    toggleHeaderTheme() {
        this.themeService.toggleHeaderDarkTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggle() {
        this.themeService.toggle();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
