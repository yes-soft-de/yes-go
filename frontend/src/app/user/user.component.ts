import { Component, OnInit } from '@angular/core';
import {searchSelector} from './search/store/reducers/search.reducer';
import {Observable} from 'rxjs';
import {Search} from './search/entity/search';
import {Store} from '@ngrx/store';
import {UserState} from './store/app-state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  searchResult$: Observable<Search[]>;

  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    this.searchResult$ = this.store.select(searchSelector);
  }

}
