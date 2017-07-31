import { Component, Input, EventEmitter, Output, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCandidateService } from '../../services/create-candidate.service';
import { DictionariesService } from '../../services/dictionaries.service';
import { IGeneral } from '../../interfaces/IGeneral';

@Component({
  selector: 'input-candidate',
  templateUrl: 'input-candidate.component.html',
  styleUrls: ['input-candidate.component.scss'],
})
export class InputCandidateComponent implements DoCheck {
  @Input() canInfo: any;
  @Output() canInfoChange: EventEmitter<any> = new EventEmitter<any>();

  statuses: IGeneral[] = [];
  cities: IGeneral[] = [];
  englishLevel: IGeneral[] = [];
  skills: IGeneral[] = [];

  constructor(private router: Router,
              private ccService: CreateCandidateService,
              private hService: DictionariesService) {
    this.hService.getCities().then((cities) => {
      this.cities = cities;
      if (this.canInfo.city) {
        this.canInfo.city = this.cities.find(i => i.name === this.canInfo.city).id;
      }
    });
    this.hService.getEnglishLevel().then((levels) => {
      this.englishLevel = levels;
      if (this.canInfo.engLevel) {
        this.canInfo.engLevel = this.englishLevel.find(i => i.name === this.canInfo.engLevel).id;
      }
    });
    this.hService.getSkills().then((skills) => {
      this.skills = skills;
    });
    this.hService.getCandidateStatuses().then((statuses) => {
      this.statuses = statuses;
      if (this.canInfo.status) {
        this.canInfo.status = this.statuses.find(i => i.name === this.canInfo.status).id;
      }
    });
  }

  ngDoCheck(): void {
    if (!this.canInfo.candidatePrevJobs)
      this.canInfo.candidatePrevJobs = [];
    this.canInfoChange.emit(this.canInfo);
  }

  addPrevJob(): void {
    this.canInfo.candidatePrevJobs.push({ contact: {} });
  }

  removePrevJob(): void {
    this.canInfo.candidatePrevJobs.pop();
  }

  addSecondary() {
    this.canInfo.candidateSecondarySkills.push({});
  }

  removeSecondary() {
    this.canInfo.candidateSecondarySkills.pop();
  }
}
