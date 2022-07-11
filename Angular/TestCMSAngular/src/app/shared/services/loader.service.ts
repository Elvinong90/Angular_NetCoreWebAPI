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
  protected loader: boolean = false;
  protected loaderIndicator?: LoadingIndicator = undefined;

  isLoading() {
    return this.loader;
  }

  getloadingIndicator() {
    return this.loaderIndicator;
  }

  startLoading() {
    this.loader = true;
    this.loaderIndicator = LoadingIndicator.LOAD_DATA;
  }

  overrideLoading(indicator: LoadingIndicator) {
    this.loader = true;
    this.loaderIndicator = indicator;
  }

  hideLoading() {
    this.loader = false;
    this.loaderIndicator = undefined;
  }
}
