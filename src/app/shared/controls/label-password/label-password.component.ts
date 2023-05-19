import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    forwardRef,
} from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-label-password',
    templateUrl: './label-password.component.html',
    styleUrls: ['./label-password.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LabelPasswordComponent),
            multi: true,
        },
    ],
})
export class LabelPasswordComponent implements OnInit {
    @Input() title!: string;
    @Input() required!: boolean;
    @Input() control!: AbstractControl;
    @Input() patternError!: string;
    @Input() icon!: string;
    @Input() iconLabel!: boolean;
    @Input() readonly = false;
    @Input() placeholder!: string;
    @Input() value!: string;
    @Input() isLabel = true;
    @Input() type = 'text';
    @Input() min!: number;

    @Output() changed = new EventEmitter<string>();
    @Output() outChange = new EventEmitter<string>();
    @Output() blurE = new EventEmitter();

    isDisabled!: boolean;
    hide = true;

    constructor() {
        this.icon = 'ri-lock-password-fill';
    }

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

    onKeyup(value: string): void {
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    onChange(value: string): void {
        this.outChange.emit(value);
    }

    onBlur(): void {
        this.propagateTouched();
        this.blurE.emit();
    }
}
