import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { MaterialModule } from './material/material.module';
import { SnackMessageComponent } from './components/snack-message/snack-message.component';
import { HrCalendarComponent } from './components/calendar/hr-calendar.component';

import { SnackMessagePbService } from './services/snack-message-pb.service';
import { SnackMessageService } from './services/snack-messgae.service';

@NgModule({
  declarations: [SnackMessageComponent, HrCalendarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  providers: [SnackMessagePbService, SnackMessageService],
  entryComponents: [SnackMessageComponent],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,
    HrCalendarComponent
  ]
})
export class UiModule {}
