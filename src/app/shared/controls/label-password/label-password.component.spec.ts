import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPasswordComponent } from './label-password.component';

describe('LabelPasswordComponent', () => {
    let component: LabelPasswordComponent;
    let fixture: ComponentFixture<LabelPasswordComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LabelPasswordComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LabelPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
