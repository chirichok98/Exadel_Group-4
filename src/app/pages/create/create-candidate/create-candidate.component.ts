import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { CreateCandidateService } from './create-candidate.service';
import { ContactsFormComponent } from '../../../components/contacts-form/contacts-form.component';
import { PrevJobFormComponent } from '../../../components/prev-job-form/prev-job-form.component';
import { SelectFormComponent } from '../../../components/select-form/select-form.component';
// tslint:disable-next-line:max-line-length
import { DatepickerFormComponent } from '../../../components/datepicker-form/datepicker-form.component';
import { IGeneral } from '../../../interfaces/IGeneral';
import { HelpService } from '../help.service';
import { ITechSkill } from '../../../interfaces/ITechSkill';

declare const $;

@Component({
  selector: 'create-candidate',
  templateUrl: 'create-candidate.component.html',
  styleUrls: ['create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  @ViewChild('contact') contactsForm: ContactsFormComponent;
  @ViewChildren('prevJob') prevJobsForm: QueryList<PrevJobFormComponent>;
  @ViewChild('city') citySelect: SelectFormComponent;
  @ViewChild('engLevel') englishSelect: SelectFormComponent;
  @ViewChild('primary') primarySelect: SelectFormComponent;
  @ViewChild('secondary') secondarySelect: SelectFormComponent;
  @ViewChild('date') datepickerInput: DatepickerFormComponent;
  canInfo: any = {};
  prevJobs: any = [];

  cities: IGeneral[] = [];
  englishLevel: IGeneral[];
  skills: ITechSkill[] = [];

  constructor(private eRef: ElementRef,
    private ccService: CreateCandidateService,
    private hService: HelpService) {
    this.hService.getCities().then((cities) => {
      this.cities = cities;
    });
    this.hService.getEnglishLevel().then((levels) => {
      this.englishLevel = levels;
    });
    this.hService.getSkills().then((skills) => {
      this.skills = skills;
    });
  }

  ngOnInit() {
  }

  getSelectedIndex(field: ElementRef, multiple: boolean): number | number[] {
    const options: any = field.nativeElement.selectedOptions;
    const index: number[] = [];
    if (!multiple) {
      return options[0].index;
    }
    for (const option of options) {
      index.push(option.index);
    }
    return index;
  }

  getCity(field: ElementRef): any {
    const index: number | number[] = this.getSelectedIndex(field, false);
    return index;
  }

  getEnglishLevel(field: ElementRef): any {
    const index: number | number[] = this.getSelectedIndex(field, false);
    return index;
  }

  getPrimarySkill(field: ElementRef): any {
    const index: number | number[] = this.getSelectedIndex(field, false);
    return index;
  }

  getSecondarySkills(field: ElementRef): any {
    const index: number | number[] = this.getSelectedIndex(field, true);
    return index;
  }

  getDate(field: ElementRef): any {
    const dateStr: string = field.nativeElement.value;
    const date: Date = new Date(dateStr);
    return date;
  }

  getContacts(): any {
    return this.contactsForm.contact;
  }

  addCandidate(): void {
    this.canInfo.city = this.getCity(this.citySelect.result);
    this.canInfo.engLevel = this.getEnglishLevel(this.englishSelect.result);
    this.canInfo.primarySkill = this.getPrimarySkill(this.primarySelect.result);
    this.canInfo.secondarySkill = this.getSecondarySkills(this.secondarySelect.result);
    this.canInfo.pSExperience = this.getDate(this.datepickerInput.date);
    this.canInfo.contact = this.getContacts();

    this.prevJobs.length = 0;
    this.prevJobsForm.forEach((item: any) => {
      this.prevJobs.push(item.prevJob);
    });
    this.canInfo.candidatePrevJobs = this.prevJobs;
    console.log(this.canInfo);

    this.ccService.addCandidate(this.canInfo)
      .then((can: any) => {
        console.log(can);
      });
  }

  addPrevJob(): void {
    this.prevJobs.push({});
  }
  deletePrevJob(): void {
    this.prevJobs.pop();
  }
}
