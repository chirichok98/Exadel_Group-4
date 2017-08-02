import { Injectable, HostListener, Inject } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class PagerService {
  url: string;
  constructor(private httpService: HttpService) { }
  amount: number = 10;
  initAmount: number = 10;
  skip: number = 10;
  private getPager(skip: number = 0, amount: number, model?: any): Promise<any> {
    const pagerParams: any = { skip, amount };
    if (model) {
      pagerParams.model = model;
    }
    console.log(pagerParams);
    const items: Promise<any> =
      this.httpService.get(this.url, pagerParams);
    return items;
  }
  init(url: string, amount?: number, model?: any): Promise<any> {
    this.url = url;
    this.initAmount = amount;
    return this.getPager(0, amount || this.amount, model);
  }
  showMore(skip?: number, amount?: number, model?: any) {
    return this.getPager(0 + (skip || this.skip), amount || this.amount, model);
  }
}
