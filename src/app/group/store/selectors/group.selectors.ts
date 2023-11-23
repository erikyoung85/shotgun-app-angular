import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GroupState, groupFeatureKey } from "../state/group.state";
import { queryAsyncState, unwrapAsyncDataItem } from "src/app/shared/utils/aysnc-data-item";

export const selectGroupState = createFeatureSelector<GroupState>(groupFeatureKey);

export const selectGroupIsLoading = createSelector(selectGroupState, 
    (groupState) => queryAsyncState(groupState.group).isLoading
);
export const selectGroup = createSelector(selectGroupState, (groupState) => unwrapAsyncDataItem(groupState.group));
export const selectGroupName = createSelector(selectGroup, 
    (groupState) => groupState?.name ?? ''
);

export const selectPersonDict = createSelector(selectGroup, 
    (group) => group?.personDict ?? {}
);
export const selectAllPeople = createSelector(selectPersonDict, 
    (personDict) => personDict !== undefined ? Object.values(personDict) : []
);

