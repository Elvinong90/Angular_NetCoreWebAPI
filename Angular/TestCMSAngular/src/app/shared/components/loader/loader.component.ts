import { Component, OnInit, Input } from '@angular/core';
import { LoaderService, LoadingIndicator } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() topbarLocated = false;
  @Input() formsubmitLocated = false;
  @Input() topmodalLocated = false;
  @Input() modalsubmitLocated = false;

  LoadingIndicator = LoadingIndicator;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {}

  isLoading() {
    return this.loaderService.isLoading();
  }

  getLoadingIndicator() {
    return this.loaderService.getloadingIndicator();
  }
}
