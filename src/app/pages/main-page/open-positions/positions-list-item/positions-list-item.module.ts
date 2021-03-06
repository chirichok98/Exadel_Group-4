import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsListItemComponent } from './positions-list-item.component';
// tslint:disable-next-line:max-line-length
import { PositionDetailModule } from '../../../../components/position-detail-card/position-detail-card.module';
import { PositionService } from '../../../../services/position.service';
import { BreadCrumbsModule } from '../../../../components/bread-crumbs/bread-crumbs.module';

@NgModule({
  imports: [
    PositionDetailModule,
    CommonModule,
    BreadCrumbsModule,
  ],
  exports: [],
  declarations: [PositionsListItemComponent],
  providers: [PositionService],
})
export class PositionsListItemModule { }
