import { FormGroup } from '@angular/forms';

export function repeatPasswordValidator(
    group: FormGroup
): { [key: string]: boolean } | null {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');

    return confirmPassword?.value && password?.value !== confirmPassword?.value
        ? { repeat: true }
        : null;
}
