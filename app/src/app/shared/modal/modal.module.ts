import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, TranslateModule, MatDialogModule, MatButtonModule],
  exports: [ModalComponent],
})
export class ModalModule {}
