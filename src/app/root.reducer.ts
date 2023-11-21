import { ActionReducerMap } from "@ngrx/store";
import { shotgunPickerReducer } from "./shotgun-picker/store/reducers/shotgun-picker.reducer";
import { shotgunPickerFeatureKey } from "./shotgun-picker/store/state/shotgun-picker.state";
import { routerReducer } from '@ngrx/router-store';
import { groupFeatureKey } from "./group/store/state/group.state";
import { groupReducer } from "./group/store/reducers/group.reducer";

export const reducers: ActionReducerMap<{}> = {
    router: routerReducer,
    [shotgunPickerFeatureKey]: shotgunPickerReducer,
    [groupFeatureKey]: groupReducer,
};