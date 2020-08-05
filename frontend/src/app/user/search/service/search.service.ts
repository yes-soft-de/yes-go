import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, delay, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserConfig } from '../../UserConfig';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  // Fetch Search Result Data
  getSearchResult(payload: string) {
    return this.httpClient.get(`${UserConfig.searchAPI}/${payload}`);
  }

}
