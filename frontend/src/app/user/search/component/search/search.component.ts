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
  dataSearch: Search[];
  imageClicked: boolean;
  typing = false;


  constructor(private store: Store<UserState>) {
  }

  ngOnInit() {
    this.imageClicked = true;
    this.store.select(fromReducer.searchSelector).subscribe(
      searchResult => {
        this.dataSearch = searchResult;
        this.typing = false;
      }
    );
  }

  search(text) {
    this.imageClicked = false;
    if (text.target.value !== '') {
      this.typing = true;
      this.store.dispatch(new searchActions.LoadSearch(text.target.value));
    } else {
      this.typing = false;
      this.store.dispatch(new searchActions.LoadSearch(null));
    }
  }

  inputRest() {
    this.imageClicked = true;
    this.typing = false;
    this.inputSearch.nativeElement.value = '';
    this.store.dispatch(new searchActions.LoadSearch(null));
  }

}
