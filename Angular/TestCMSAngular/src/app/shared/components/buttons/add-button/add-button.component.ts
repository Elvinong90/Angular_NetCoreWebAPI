import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  @Input() title = '';
  @Output() onClick = new EventEmitter<boolean>(false);

  fullTitle = 'Add ';

  constructor(public loaderService: LoaderService) {}

  ngOnInit(): void {
    this.fullTitle += this.title.trim();
  }

  onClicked() {
    this.onClick.next(true);
  }
}
