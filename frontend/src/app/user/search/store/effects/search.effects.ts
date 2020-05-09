import { Injectable } from '@angular/core';
import { SearchService } from '../../service/search.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as searchActions from '../actions/search.actions';
import { mergeMap, catchError, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SearchEffects {

    constructor(
        private searchService: SearchService,
        private actions$: Actions
    ) {}

    // Search Effects
    searchEffects$ = createEffect(() => this.actions$.pipe(
        ofType(searchActions.SearchActionsType.LOAD_SEARCH),
        // debounceTime(500),			// Wait 500 Millsecond before execute The rest
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
        mergeMap(
            (action: searchActions.LoadSearch) => this.searchService.getSearchResult(action.payload)
            .pipe(
                map(searchResult => new searchActions.LoadSearchSuccess(searchResult)),
                catchError(error => of(new searchActions.LoadSearchFailed(error)))
            ))
    ));
}
