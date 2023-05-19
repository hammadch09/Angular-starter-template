import {
    Component,
    EventEmitter,
    forwardRef,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ControlItem } from '@app/models';

@Component({
    selector: 'app-label-select',
    templateUrl: './label-select.component.html',
    styleUrls: ['./label-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LabelSelectComponent),
            multi: true,
        },
    ],
})
export class LabelSelectComponent implements OnInit, ControlValueAccessor {
    @Input() items!: any[];
    @Input() placeholder!: string;
    @Input() displayValue!: string;
    @Input() selectedValue!: string;
    @Input() title!: string;
    @Input() required!: boolean;
    @Input() isInline!: boolean;
    @Input() control!: AbstractControl;
    @Input() patternError!: string;
    @Input() icon!: string;
    @Input() iconLabel!: boolean;
    @Input() isLabel = true;

    @Output() changed = new EventEmitter<any>();

    value!: any;
    isDisabled!: boolean;

    constructor() {}

    ngOnInit(): void {}

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

    private propagateChange: any = () => {};
    private propagateTouched: any = () => {};

    writeValue(value: string): void {
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

    onChange(event: MatSelectChange): void {
        const value = event.value ? event.value : null;

        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    onBlur(): void {
        this.propagateTouched();
    }

    onKeyup(value: string): void {
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }
}
