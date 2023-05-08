import { Component } from '@angular/core';
import { DialogErrorAcceptComponent } from '../dialog-error-accept/dialog-error-accept.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-accept',
  templateUrl: './dialog-accept.component.html',
  styleUrls: ['./dialog-accept.component.scss']
})
export class DialogAcceptComponent {

  constructor(private dialogRef: MatDialogRef<DialogAcceptComponent>) {}

  ngOnInit(): void {
  }

  onYesClick(): void {
    this.dialogRef.close('ok');
  }

  onNoClick(): void {
    this.dialogRef.close('cancel');
  }
}
