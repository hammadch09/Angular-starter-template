import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { SchedulerModule } from '@app/shared';

@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SchedulerModule,
        MatExpansionModule,
        NgScrollbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatSidenavModule,
    ],
    exports: [SidebarComponent],
})
export class HomeModule {}
