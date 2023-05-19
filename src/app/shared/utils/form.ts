import { FormGroup } from '@angular/forms';

export const markFormGroupTouched = (formGroup: FormGroup) => {
    (Object as any)
        .values(formGroup.controls)
        .forEach(
            (control: { markAsTouched: () => void; controls: any } | any) => {
                control.markAsTouched();

                if (control.controls) {
                    markFormGroupTouched(control);
                }
            }
        );
};

export interface Control {
    items?: any[];
    changed?: () => void;
    map?: () => void;
}

export interface ControlEntities {
    [key: string]: Control | any;
}

export const mapControls = (controls: ControlEntities): void => {
    Object.keys(controls).forEach((key) => {
        if (controls[key]?.map) {
            controls[key]?.map();
        }
    });
};
