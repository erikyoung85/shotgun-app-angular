import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GroupState, groupFeatureKey } from "../state/group.state";

export const selectGroupState = createFeatureSelector<GroupState>(groupFeatureKey);

export const selectGroup = createSelector(selectGroupState, (groupState) => groupState.group);
export const selectGroupName = createSelector(selectGroup, 
    (groupState) => groupState?.name ?? ''
);

export const selectPersonDict = createSelector(selectGroup, 
    (group) => group?.personDict ?? {}
);
export const selectAllPeople = createSelector(selectPersonDict, 
    (personDict) => personDict !== undefined ? Object.values(personDict) : []
);

