import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GroupState, Person, groupFeatureKey } from "../state/group.state";

export const selectGroupState = createFeatureSelector<GroupState>(groupFeatureKey);

export const selectGroupId = createSelector(selectGroupState, (groupState) => groupState.groupId);
export const selectAllPeople = createSelector(selectGroupState, (groupState) => groupState.allPeople);

export const selectPersonDict = createSelector(selectAllPeople, (allPeople) => {
    const personDict: {[personId: number]: Person} = {};
    allPeople.forEach(person => personDict[person.id] = person);

    return personDict;
});

