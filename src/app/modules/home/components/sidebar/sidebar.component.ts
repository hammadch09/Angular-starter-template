import { Component, OnDestroy } from '@angular/core';
import { ThemeService, ToggleService } from '@app/core/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnDestroy {
    subscription: Subscription = new Subscription();

    panelOpenState: boolean = false;
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

    /** Toggle Action */
    toggle() {
        this.toggleService.toggle();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
