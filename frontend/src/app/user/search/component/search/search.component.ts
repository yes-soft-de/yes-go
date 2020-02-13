import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/user/state/app-state';
import * as searchActions from '../../state/actions/search.actions';
import * as fromReducer from '../../state/reducers/search.reducer';
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


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.imageClicked = false;
    this.dataSearch$ = this.store.pipe(select(fromReducer.searchSelector));
  }

  search(text) {
    this.imageClicked = false;
    if (text.target.value !== '') {
      this.store.dispatch(new searchActions.LoadSearch(text.target.value));
    } else {
      this.store.dispatch(new searchActions.LoadSearch(null));
    }
  }

  inputRest() {
    this.imageClicked = true;
    this.inputSearch.nativeElement.value = '';
    this.store.dispatch(new searchActions.LoadSearch(null));
  }

}
