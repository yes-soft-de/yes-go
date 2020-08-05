import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Search } from '../../entity/search';
import * as searchActions from '../actions/search.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/user/store/app-state';


// Generate Serach State
export interface SearchState extends EntityState<Search> {
    selectSearchId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

// Generate Search Adepter
export const searchAdepter: EntityAdapter<Search> = createEntityAdapter<Search>();

// Generate search default state
export const defaultSearch: SearchState = {
    ids: [],
    entities: {},
    selectSearchId: null,
    loading: false,
    loaded: false,
    error: ''
}

// Generate serach initial state
export const initialState = searchAdepter.getInitialState(defaultSearch);

// Search Reducer
export function searchReducer(state = initialState, action: searchActions.actions) {
    switch(action.type) {
        case searchActions.SearchActionsType.LOAD_SEARCH_SUCCESS:
            return searchAdepter.addAll(action.payload, {
                ...state,
                loaded: true
            });
        case searchActions.SearchActionsType.LOAD_SEARCH_FAILED:
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        
        default:
            return state;
    }
}



// Feature Search Selector
// const searchFeatureSelector = createFeatureSelector<SearchState>('search');
const getAppState = createFeatureSelector<UserState>('user');
export const getSearchState = createSelector(
    getAppState,
    (state: UserState) => state.search
);
// Search Result Selector
export const searchSelector = createSelector(
    getSearchState,
    searchAdepter.getSelectors().selectAll
);

// Search Error Result Selector
export const searchErrorSelector = createSelector(
    getSearchState,
    (state: SearchState) => state.error
);
