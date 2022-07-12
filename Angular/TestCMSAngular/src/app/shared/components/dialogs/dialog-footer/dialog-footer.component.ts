import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-footer',
  templateUrl: './dialog-footer.component.html',
  styleUrls: ['./dialog-footer.component.scss'],
})
export class DialogFooterComponent implements OnInit {
  @Input() dialogRef!: MatDialogRef<unknown>;
  @Input() confirmTitle = 'Confirm';
  @Input() closedTitle = 'Close';

  @Output() confirmClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onConfirmClick(): void {
    this.confirmClick.next(true);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
