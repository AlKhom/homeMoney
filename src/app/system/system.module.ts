import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {SystemComponent} from './system.component';
import {SystemRouting} from './system-routing.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { OpenDirectiveDirective } from './shared/directives/open-directive.directive';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  imports: [CommonModule, SharedModule, SystemRouting],
  declarations: [BillPageComponent, HistoryPageComponent,
    PlanningPageComponent, RecordsPageComponent, SystemComponent, SidebarComponent, OpenDirectiveDirective, HeaderComponent]
})

export class SystemModule {
}
