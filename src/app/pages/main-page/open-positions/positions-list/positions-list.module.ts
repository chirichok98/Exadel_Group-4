import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PositionsListComponent } from './positions-list.component';
// tslint:disable-next-line:max-line-length
import { PositionPreviewModule } from '../../../../components/position-preview-card/position-preview-card.module';
import { SpinnerModule } from '../../../../components/spinner/spinner.module';
import { PagerModule } from '../../../../directives/pager/pager.module';
import { PositionsListService } from '../../../../services/positions-list.service';
import { PagerService } from '../../../../services/pager.service';

import { PagerDirective } from '../../../../directives/pager/pager.directive';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    PositionPreviewModule,
    CommonModule,
    SpinnerModule,
    PagerModule,
  ],
  exports: [RouterModule, PagerModule],
  declarations: [PositionsListComponent],
  providers: [PositionsListService, PagerService],
})
export class PositionsListModule { }
