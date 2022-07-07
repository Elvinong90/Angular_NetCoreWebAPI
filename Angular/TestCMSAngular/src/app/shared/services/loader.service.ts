import { Injectable } from '@angular/core';

export enum LoadingIndicator {
  LOAD_DATA,
  SUBMIT_DATA,
  LOAD_MODAL,
  SUBMIT_MODAL,
}

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader: boolean = false;
  private loaderIndicator?: LoadingIndicator;

  isLoading() {
    return this.loader;
  }

  getloadingIndicator() {
    return this.loaderIndicator;
  }

  startLoading(indicator: LoadingIndicator = LoadingIndicator.LOAD_DATA) {
    this.loader = true;
    this.loaderIndicator = indicator;
  }

  hideLoading() {
    this.loader = false;
    this.loaderIndicator = undefined;
  }
}
