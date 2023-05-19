import {
    Component,
    EventEmitter,
    Input,
    Output,
    forwardRef,
} from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

type Value = number | null | any;

@Component({
    selector: 'app-label-date',
    templateUrl: './label-date.component.html',
    styleUrls: ['./label-date.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LabelDateComponent),
            multi: true,
        },
    ],
})
export class LabelDateComponent {
    @Input() placeholder!: string;
    @Input() min!: Date;
    @Input() max!: Date;
    @Input() title!: string;
    @Input() required!: boolean;
    @Input() isInline!: boolean;
    @Input() control!: AbstractControl;
    @Input() patternError!: string;
    @Input() icon!: string;
    @Input() iconLabel!: boolean;
    @Input() not18!: boolean;

    @Output() changed = new EventEmitter<Value>();
    @Output() closed = new EventEmitter<void>();

    value!: Value;
    isDisabled!: boolean;

    constructor() {}

    ngOnInit(): void {
        this.not18 = false;
    }

    get inputValue(): Date | null {
        return this.value ? new Date(this.value) : null;
    }

    private propagateChange: any = () => {};
    private propagateTouched: any = () => {};

    writeValue(value: Value): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    onChanged(event: MatDatepickerInputEvent<Date>): void {
        const value = event.value ? event.value : null;
        // const value = event.value ? event.value.toISOString() : null;
        // const value = event.value ? event.value.getTime() : null;

        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    onClosed(): void {
        this.propagateTouched();
        this.closed.emit();
    }

    hasError(): boolean {
        return this.control && this.control.invalid && this.control.touched;
    }

    get errorKey() {
        return (
            this.control &&
            this.control.errors &&
            Object.keys(this.control.errors)[0]
        );
    }

    onKeyup(value: string): void {
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    onBlur(): void {
        this.propagateTouched();
    }
}
