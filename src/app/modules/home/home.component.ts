import { Component, OnDestroy } from '@angular/core';
import { ThemeService, ToggleService } from '@app/core/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
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
