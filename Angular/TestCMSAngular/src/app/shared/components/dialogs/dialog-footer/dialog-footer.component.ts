import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-footer',
  templateUrl: './dialog-footer.component.html',
  styleUrls: ['./dialog-footer.component.scss'],
})
export class DialogFooterComponent implements OnInit {
  @Input() dialogRef!: MatDialogRef<unknown>;
  @Input() submitTitle = 'Submit';
  @Input() closedTitle = 'Close';

  @Output() submitClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onSubmitClick(): void {
    this.submitClick.next(true);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
