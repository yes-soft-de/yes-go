import { Action } from '@ngrx/store';

// Search Actions Const Type
export enum SearchActionsType {
    LOAD_SEARCH = 'Load Search',
    LOAD_SEARCH_SUCCESS = 'Load Search Success',
    LOAD_SEARCH_FAILED = 'Load Search Failed'
}


// Search Load Actions
export class LoadSearch implements Action {
    readonly type = SearchActionsType.LOAD_SEARCH;
    constructor(public payload: string) {}
}

// Search Load Success Actions
export class LoadSearchSuccess implements Action {
    readonly type = SearchActionsType.LOAD_SEARCH_SUCCESS;
    constructor(public payload: any) {}
}

// Search Load Failed Actions
export class LoadSearchFailed implements Action {
    readonly type = SearchActionsType.LOAD_SEARCH_FAILED;
    constructor(public payload: string) {}
}


// Search Actions Type
export type actions = LoadSearch | LoadSearchSuccess | LoadSearchFailed;