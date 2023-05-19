import { DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ThemeService, ToggleService } from '@app/core/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
    subscription: Subscription = new Subscription();

    isToggled: boolean = false;

    currentDate: Date = new Date();
    formattedDate: any = this.datePipe.transform(
        this.currentDate,
        'dd MMMM yyyy'
    );

    constructor(
        private toggleService: ToggleService,
        private datePipe: DatePipe,
        public themeService: ThemeService
    ) {
        this.subscription = this.toggleService.isToggled$.subscribe(
            (isToggled: boolean) => {
                this.isToggled = isToggled;
            }
        );
    }

    toggle() {
        this.toggleService.toggle();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
