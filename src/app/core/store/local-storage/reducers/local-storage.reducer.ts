import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as localStorageActions from '../actions/local-storage.actions';
import { INITIAL_LOCAL_STORAGE_STATE } from '../state/local-storage.initial-state';
import { LocalStorageState } from '../state/local-storage.state';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageReducer = createReducer(
    INITIAL_LOCAL_STORAGE_STATE,
    on(localStorageActions.LocalStorageAddGroupId, (state, action): LocalStorageState => {
        const groups = new Set<number>(state.groupIds);
        groups.add(action.groupId);
        return {
            ...state,
            groupIds: [...groups],
        };
    }),
);

export function localStorageSyncReducer(reducer: ActionReducer<LocalStorageState>) {
    return localStorageSync({
        keys: ['groupIds'],
        rehydrate: true,
    })(reducer);
}
