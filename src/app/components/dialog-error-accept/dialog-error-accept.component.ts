import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-error-accept',
  templateUrl: './dialog-error-accept.component.html',
  styleUrls: ['./dialog-error-accept.component.scss']
})
export class DialogErrorAcceptComponent {
  constructor(private dialogRef: MatDialogRef<DialogErrorAcceptComponent>) {}


  ngOnInit(): void {
  }

  onYesClick(): void {
    this.dialogRef.close('ok');
  }

  onNoClick(): void {
    this.dialogRef.close('cancel');
  }
}