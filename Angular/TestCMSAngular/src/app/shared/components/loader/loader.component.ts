import { Component, OnInit } from '@angular/core';
import { LoaderService, LoadingIndicator } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  LoadingIndicator = LoadingIndicator;

  constructor(public loaderService: LoaderService) {}

  ngOnInit(): void {}
}
