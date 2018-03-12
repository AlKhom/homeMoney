import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {SystemComponent} from './system.component';
import {SystemRouting} from './system-routing.module';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {OpenDirectiveDirective} from './shared/directives/open-directive.directive';
import {HeaderComponent} from './shared/components/header/header.component';
import {BillCardComponent} from './bill-page/bill-card/bill-card.component';
import {BillCurrencyComponent} from './bill-page/bill-currency/bill-currency.component';
import {BillService} from './shared/services/bill.service';
import {PipeMoment} from './shared/pipes/pipe.moment';
import {AddEventComponent} from './records-page/add-event/add-event.component';
import {AddCategoryComponent} from './records-page/add-category/add-category.component';
import {EditCategoryComponent} from './records-page/edit-category/edit-category.component';
import {CategoryService} from './shared/services/category.service';
import {EventService} from './shared/services/event.service';

@NgModule({
  imports: [CommonModule, SharedModule, SystemRouting],
  declarations: [BillPageComponent, HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    SystemComponent, SidebarComponent,
    OpenDirectiveDirective, HeaderComponent, BillCardComponent,
    BillCurrencyComponent, PipeMoment, AddEventComponent,
    AddCategoryComponent, EditCategoryComponent],
  providers: [BillService, CategoryService, EventService]
})

export class SystemModule {
}
