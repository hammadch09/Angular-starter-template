import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';

@NgModule({
    declarations: [SchedulerComponent],
    imports: [CommonModule],
    exports: [SchedulerComponent],
    providers: [DatePipe],
})
export class SchedulerModule {}
