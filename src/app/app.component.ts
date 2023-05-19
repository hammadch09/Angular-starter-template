import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService, ToggleService } from './core/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
    title = 'ast';

    subscription: Subscription = new Subscription();
    isToggled: boolean = false;

    constructor(
        public themeService: ThemeService,
        private toggleService: ToggleService
    ) {
        this.subscription = this.toggleService.isToggled$.subscribe(
            (isToggled: boolean) => {
                this.isToggled = isToggled;
            }
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
