import { ActionReducerMap } from "@ngrx/store";
import { shotgunPickerReducer } from "./shotgun-picker/store/reducers/shotgun-picker.reducer";
import { shotgunPickerFeatureKey } from "./shotgun-picker/store/state/shotgun-picker.state";
import { routerReducer } from '@ngrx/router-store';
import { groupFeatureKey } from "./group/store/state/group.state";
import { groupReducer } from "./group/store/reducers/group.reducer";
import { localStorageFeatureKey } from "./core/store/local-storage/state/local-storage.state";
import { localStorageReducer, localStorageSyncReducer } from "./core/store/local-storage/reducers/local-storage.reducer";

export const reducers: ActionReducerMap<{}> = {
    router: routerReducer,
    [localStorageFeatureKey]: localStorageSyncReducer(localStorageReducer),
    [shotgunPickerFeatureKey]: shotgunPickerReducer,
    [groupFeatureKey]: groupReducer,
};