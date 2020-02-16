import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserState } from 'src/app/user/store/app-state';
import * as searchActions from '../../store/actions/search.actions';
import * as fromReducer from '../../store/reducers/search.reducer';
import { Observable } from 'rxjs';
import { Search } from '../../entity/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput', {static: true}) inputSearch: ElementRef;
  dataSearch$: Observable<Search[]>;
  imageClicked: boolean;
  loading: boolean;


  constructor(private store: Store<UserState>) {
  }

  ngOnInit() {
    this.imageClicked = true;
    this.dataSearch$ = this.store.pipe(select(fromReducer.searchSelector));
  }

  search(text) {
    this.imageClicked = false;
    if (text.target.value !== '') {
      this.loading = true;
      this.store.dispatch(new searchActions.LoadSearch(text.target.value));
    } else {
      this.loading = false;
      this.store.dispatch(new searchActions.LoadSearch(null));
    }
  }

  inputRest() {
    this.imageClicked = true;
    this.loading = false;
    this.inputSearch.nativeElement.value = '';
    this.store.dispatch(new searchActions.LoadSearch(null));
  }

}
