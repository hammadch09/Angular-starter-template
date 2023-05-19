import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatCardModule } from '@angular/material/card';
import { LabelInputModule } from '@app/shared/controls/label-input/label-input.module';
import { CreateComponent } from './components/create/create.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { LabelPasswordModule } from '@app/shared/controls/label-password/label-password.module';
import { LabelSelectModule } from '@app/shared/controls/label-select/label-select.module';

@NgModule({
    declarations: [UserComponent, CreateComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatCardModule,
        LabelInputModule,
        LabelPasswordModule,
        LabelSelectModule,
        MatPaginatorModule,
        MatMenuModule,
        MatTableModule,
        MatSortModule,
        FlexLayoutModule,
        MatButtonModule,
    ],
})
export class UserModule {}
