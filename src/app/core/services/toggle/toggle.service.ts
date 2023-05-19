import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ToggleService {
    private isToggled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );

    constructor() {}

    /** Is Toggled Getter as Observable */
    get isToggled$(): Observable<boolean> {
        return this.isToggled.asObservable();
    }

    /** Store Value On Toggle in Behavior Subject */
    toggle() {
        this.isToggled.next(!this.isToggled.value);
    }
}
