import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page.state';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { CandidatesModule } from './candidates/candidates.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PositionsListModule } from './open-positions/positions-list/positions-list.module';
// tslint:disable-next-line:max-line-length
import { PositionsListItemModule } from './open-positions/positions-list-item/positions-list-item.module';

@NgModule({
  imports: [
    RouterModule,
    MainPageRoutingModule,
    NavbarModule,
    CandidatesModule,
    PositionsListModule,
    PositionsListItemModule,
    NotificationsModule,
  ],
  exports: [],
  declarations: [MainPageComponent],
  providers: [],
})
export class MainPageModule { }
