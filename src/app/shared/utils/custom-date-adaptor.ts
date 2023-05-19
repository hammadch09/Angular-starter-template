import { NativeDateAdapter } from '@angular/material/core';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class PickDateAdapter extends NativeDateAdapter {
    override format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            return formatDate(date, 'dd-MMM-yyyy', this.locale);
        } else {
            return date.toDateString();
        }
    }
}
