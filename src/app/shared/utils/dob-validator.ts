import { FormControl } from '@angular/forms';

export function DobValidator(control: FormControl) {
    let eighteenYearsAge = new Date();
    eighteenYearsAge.setFullYear(eighteenYearsAge.getFullYear() - 18);

    if (control.value > eighteenYearsAge) {
        return { not18: true };
    } else {
        return null;
    }
}
