import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Timeline } from '../models/timeline';

@Component({
    selector: 'app-scheduler',
    templateUrl: './scheduler.component.html',
    styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
    scheduleStart: Date = new Date();
    scheduleEnd: Date = new Date();
    view = 'Month';
    today: Date = new Date();
    startDate: Date = new Date();
    endDate!: Date;
    resources: any = [];
    timeline = [] as Timeline[];
    timelineWidth = 2000;
    timelineItemWidth = 60;
    itemsToAdd = 5;
    scrolled = false;
    dayNames: string[] = [];
    weekStartDay = 'Sunday';

    @ViewChild('itemContainer') itemContainer: any;
    @ViewChild('container') container: any;
    // @ViewChild('today') todayDiv: any;
    scrollPosition = 0;

    constructor(private datepipe: DatePipe) {}

    ngOnInit(): void {
        debugger;
        this.scheduleStart.setMonth(this.scheduleStart.getMonth() - 6);
        this.scheduleStart = new Date(
            this.scheduleStart.getFullYear(),
            this.scheduleStart.getMonth(),
            1
        );
        this.scheduleEnd = new Date(this.scheduleStart);
        this.scheduleEnd.setMonth(this.scheduleEnd.getMonth() + 12);
        this.startDate.setMonth(this.startDate.getMonth() - 3);
        this.endDate = this.startDate;
        this.endDate.setMonth(this.endDate.getMonth() + 12);

        this.resources = [
            { id: 'r1', name: 'Mike', eventColor: 'red' },
            { id: 'r2', name: 'Linda', eventColor: 'indigo' },
            { id: 'r3', name: 'Don', eventColor: 'lime' },
            { id: 'r4', name: 'Karen', eventColor: 'orange' },
            { id: 'r5', name: 'Doug', eventColor: 'teal' },
            { id: 'r6', name: 'Peter', eventColor: 'purple' },
            { id: 'r7', name: 'Sam', eventColor: 'yellow' },
            { id: 'r8', name: 'Melissa', eventColor: 'green' },
            { id: 'r9', name: 'John', eventColor: 'amber' },
            { id: 'r10', name: 'Ellen', eventColor: 'blue' },
        ];
        this.dayNames = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        this.fillTimeline();
    }

    ngAfterViewChecked() {
        if (!this.scrolled) {
            // document.getElementById("content").scrollIntoView();
            const a = document.getElementById(
                'today'
            ) as HTMLInputElement | null;
            a?.scrollIntoView({ inline: 'center' });
            // this.container.nativeElement.scrollLeft = (this.timeline.length * this.timelineItemWidth) / 2;
            this.scrolled = true;
        }
    }

    fillTimeline() {
        let pIndex = 0;
        if (this.view === 'Month') {
            let currentDate = this.scheduleStart;
            let objTimeline: Timeline;
            while (currentDate <= this.scheduleEnd) {
                objTimeline = {} as Timeline;
                objTimeline.date = currentDate;
                objTimeline.label =
                    this.datepipe.transform(currentDate, 'yyyy MMM-dd') || '';
                objTimeline.index = pIndex;
                objTimeline.divId =
                    currentDate.getFullYear() === this.today.getFullYear() &&
                    currentDate.getMonth() === this.today.getMonth()
                        ? 'currentMonth'
                        : pIndex.toString();
                objTimeline.nodes = [] as Timeline[];
                do {
                    objTimeline.nodes.push({
                        date: currentDate,
                        label:
                            this.datepipe.transform(currentDate, 'MMM-dd') ||
                            '',
                        index: pIndex,
                        divId:
                            currentDate.getFullYear() ===
                                this.today.getFullYear() &&
                            currentDate.getMonth() === this.today.getMonth() &&
                            currentDate.getDate() === this.today.getDate()
                                ? 'today'
                                : pIndex.toString(),
                    });
                    // debugger;
                    currentDate = new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        currentDate.getDate() + 1
                    ); // add 1 day
                } while (
                    this.dayNames[currentDate.getDay()] != this.weekStartDay
                );
                this.timeline.push(objTimeline);
                // this.timeline.push({
                //   date: currentDate,
                //   index: pIndex,
                //   divId: currentDate.getFullYear() === this.today.getFullYear() && currentDate.getMonth() === this.today.getMonth() ? "today" : pIndex
                // });
                pIndex++;
                // currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1); // add 1 month
            }
            console.log(this.timeline);
            this.timelineWidth = this.timeline.length * this.timelineItemWidth;
        }

        // this.container.nativeElement.scrollLeft = 600;
    }

    generateEvents() {
        const result = [];

        // Loop through every day for a year surrounding today.
        for (
            let eventId = 1, date = new Date(this.startDate);
            date < this.endDate;
            date.setDate(date.getDate() + 1)
        ) {
            // Create 10 events at random times for random resources every day
            for (let i = 0; i < 10; i++) {
                result.push({
                    id: eventId++,
                    name: `Event ${eventId}`,
                    resourceId: `r${i + 1}`,
                    startDate: new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate(),
                        Math.floor(20 * Math.random())
                    ),
                    duration: Math.floor(10 * Math.random()) + 1,
                    durationUnit: 'hour',
                });
            }
        }

        return result;
    }

    calculateLeft(item: any) {
        return item.index * 60;
    }

    onScroll(event: any) {
        // debugger;
        const scrollLeft = event.target.scrollLeft;
        const containerWidth = event.target.offsetWidth;
        const itemsWidth = this.itemContainer.nativeElement.scrollWidth;

        // if scrolled to the left end
        if (scrollLeft === 0) {
            let pIndex = -1;
            // const startIndex = Math.max(0, this.itemsToAdd - this.timeline.length);
            for (let i = 0; i < this.itemsToAdd; i++) {
                this.scheduleStart.setMonth(this.scheduleStart.getMonth() - 1);
                // this.timeline.unshift({
                //   date: new Date(this.scheduleStart),
                //   index: pIndex
                // });
                pIndex--;
            }
            this.scrollPosition += this.itemsToAdd * this.timelineItemWidth;
            // this.itemContainer.nativeElement.scrollLeft = this.scrollPosition;
            // this.itemContainer.nativeElement.scrollLeft = 300;
            // this.container.nativeElement.scrollLeft = this.itemsToAdd * this.timelineItemWidth;
            this.timelineWidth = this.timeline.length * this.timelineItemWidth;
        }

        // if scrolled to the right end
        if (scrollLeft + containerWidth === itemsWidth) {
            // const endIndex = Math.max(this.timeline.length + this.itemsToAdd, 2 * this.itemsToAdd);
            // debugger;
            for (let i = 0; i < this.itemsToAdd; i++) {
                let pIndex = this.timeline.length;
                this.scheduleEnd.setMonth(this.scheduleEnd.getMonth() + 1);
                // this.timeline.push({
                //   date: new Date(this.scheduleEnd),
                //   index: pIndex
                // });
                pIndex++;
            }
            this.timelineWidth = this.timeline.length * this.timelineItemWidth;
        }
    }
}
