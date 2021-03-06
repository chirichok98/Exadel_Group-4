import { Component, Input, DoCheck, Output, EventEmitter } from '@angular/core';

import { INotificationOption } from '../../interfaces/INotificationOption';
import { MdDialog } from '@angular/material';
import { InterviewFeedbackComponent } from '../interview-feedback/interview-feedback.component';
import { MyCookieService } from '../../services/cookie.service';

@Component({
  selector: 'notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.scss'],
})

export class NotificationComponent implements DoCheck {
  @Input() notification: INotificationOption;

  type: string;
  id: number;
  skill: string;
  isChecked: boolean = false;

  constructor(public dialog: MdDialog,
              private cookie: MyCookieService) { }

  ngDoCheck() {
    const checked: number[] = this.cookie.getCheckedNotifications();
    if (this.notification) {
      if (checked.includes(this.notification.id)) {
        this.isChecked = true;
      }
      if (this.notification.techInterview) {
        this.type = 'tech';
        this.id = this.notification.techInterview.id;
        this.skill = this.notification.techInterview.techSkill;
      }
      if (this.notification.generalInterview) {
        this.type = 'general';
        this.id = this.notification.generalInterview.id;
      }
    }
  }

  markAsRead() {
    this.cookie.toggleChecked(this.notification.id);
  }

  openInterview() {
    this.dialog.open(InterviewFeedbackComponent, {
      data: {
        id: this.id,
        type: this.type,
        primarySkill: this.skill,
        notificationId: this.notification.id,
      },
    });
  }
}
