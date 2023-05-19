import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizerSettingComponent } from './customizer-setting.component';

describe('CustomizerSettingComponent', () => {
    let component: CustomizerSettingComponent;
    let fixture: ComponentFixture<CustomizerSettingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CustomizerSettingComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CustomizerSettingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
