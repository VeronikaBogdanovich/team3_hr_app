import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { SnackMessageComponent } from './components/snack-message/snack-message.component';

import { SnackMessagePbService } from './services/snack-message-pb.service';
import { SnackMessageService } from './services/snack-messgae.service';
import { ReusableMatConfirmModule } from './modules/reusable-mat-confirm/reusable-mat-confirm.module';
import { InterviewDialogModule } from './modules/interview-dialog/interview-dialog.module';
import { InterviewDialogComponent } from './modules/interview-dialog/interview-dialog/interview-dialog.component';
import { InterviewDialogService } from './modules/interview-dialog/interview-dialog.service';
import { PasteProfileImgDirective } from './directives/paste_profile_img.directive';

@NgModule({
  declarations: [SnackMessageComponent, PasteProfileImgDirective],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReusableMatConfirmModule,
    InterviewDialogModule
  ],
  providers: [
    SnackMessagePbService,
    SnackMessageService,
    InterviewDialogService
  ],
  entryComponents: [SnackMessageComponent, InterviewDialogComponent],
  exports: [
    MaterialModule,
    ReusableMatConfirmModule,
    FlexLayoutModule,
    InterviewDialogModule,
    PasteProfileImgDirective
  ]
})
export class UiModule {}
