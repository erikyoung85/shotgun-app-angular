import { ActionReducerMap } from "@ngrx/store";
import { shotgunPickerReducer } from "./shotgun-picker/store/reducers/shotgun-picker.reducer";
import { shotgunPickerFeatureKey } from "./shotgun-picker/store/state/shotgun-picker.state";

export const reducers: ActionReducerMap<{}> = {
    [shotgunPickerFeatureKey]: shotgunPickerReducer,
};