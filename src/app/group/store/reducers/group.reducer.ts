import { createReducer, on } from "@ngrx/store";
import { INITIAL_GROUP_STATE } from "../state/group.initial-state";
import * as groupActions from '../actions/group.actions';
import { GroupState } from "../state/group.state";
import { AsyncDataItemState, unwrapAsyncDataItem, wrapAsAsyncDataItem } from "src/app/shared/utils/aysnc-data-item";


export const groupReducer = createReducer(INITIAL_GROUP_STATE,
    on(groupActions.FetchGroup, (state, action): GroupState => {

        return {
            ...state,
            group: wrapAsAsyncDataItem(undefined, AsyncDataItemState.LOADING)
        }
    }),
    on(groupActions.FetchGroupSuccess, (state, action): GroupState => {
        return {
            ...state,
            group: wrapAsAsyncDataItem(action.group, AsyncDataItemState.LOADED)
        }
    }),
    on(groupActions.FetchGroupFailure, (state, action): GroupState => {
        return {
            ...state,
            group: wrapAsAsyncDataItem(undefined, AsyncDataItemState.ERROR, action.errMsg)
        }
    }),

    on(groupActions.AddNewGroup, (state, action): GroupState => {

        return {
            ...state,
            group: wrapAsAsyncDataItem(undefined, AsyncDataItemState.LOADING)
        }
    }),
    on(groupActions.AddNewGroupSuccess, (state, action): GroupState => {
        return {
            ...state,
            group: wrapAsAsyncDataItem(action.group, AsyncDataItemState.LOADED)
        }
    }),
    on(groupActions.AddNewGroupFailure, (state, action): GroupState => {
        return {
            ...state,
            group: wrapAsAsyncDataItem(undefined, AsyncDataItemState.ERROR, action.errMsg)
        }
    }),

    on(groupActions.AddPersonToGroup, (state): GroupState => {        
        return {
            ...state,
            group: wrapAsAsyncDataItem(state.group.data, AsyncDataItemState.LOADING)
        }
    }),
    on(groupActions.AddPersonToGroupSuccess, (state, action): GroupState => {
        const group = unwrapAsyncDataItem(state.group);
        if (group === undefined) return state;
        
        return {
            ...state,
            group: wrapAsAsyncDataItem({
                ...group,
                personDict: {
                    ...group.personDict,
                    [action.person.id]: {
                        ...action.person,
                        isInCar: true,
                    },
                }
            }, AsyncDataItemState.LOADED)
        }
    }),
    on(groupActions.AddPersonToGroupFailure, (state, action): GroupState => {        
        return {
            ...state,
            group: wrapAsAsyncDataItem(state.group.data, AsyncDataItemState.ERROR, action.errMsg)
        }
    }),

    on(groupActions.EditPerson, (state): GroupState => {        
        return {
            ...state,
            group: wrapAsAsyncDataItem(state.group.data, AsyncDataItemState.LOADING)
        }
    }),
    on(groupActions.EditPersonSuccess, (state, action): GroupState => {
        const group = unwrapAsyncDataItem(state.group);
        if (group === undefined) return state;
        
        return {
            ...state,
            group: wrapAsAsyncDataItem({
                ...group,
                personDict: {
                    ...group.personDict,
                    [action.person.id]: {
                        ...action.person,
                        isInCar: true,
                    },
                }
            }, AsyncDataItemState.LOADED)
        }
    }),
    on(groupActions.EditPersonFailure, (state, action): GroupState => {        
        return {
            ...state,
            group: wrapAsAsyncDataItem(state.group.data, AsyncDataItemState.ERROR, action.errMsg)
        }
    }),

    on(groupActions.DeletePersonFromGroup, (state): GroupState => {
        return {
            ...state,
            group: wrapAsAsyncDataItem(state.group.data, AsyncDataItemState.LOADING)
        }
    }),
    on(groupActions.DeletePersonFromGroupSuccess, (state, action): GroupState => {
        const group = unwrapAsyncDataItem(state.group);
        if (group === undefined) return state;

        return {
            ...state,
            group: wrapAsAsyncDataItem({
                ...group,
                personDict: action.personDict,
            }, AsyncDataItemState.LOADED)
        }
    }),
    on(groupActions.DeletePersonFromGroupFailure, (state, action): GroupState => {        
        return {
            ...state,
            group: wrapAsAsyncDataItem(state.group.data, AsyncDataItemState.ERROR, action.errMsg)
        }
    }),

    on(groupActions.SetGroupName, (state): GroupState => {
        return {
            ...state,
            group: wrapAsAsyncDataItem(state.group.data, AsyncDataItemState.LOADING)
        }
    }),
    on(groupActions.SetGroupNameSuccess, (state, action): GroupState => {
        const group = unwrapAsyncDataItem(state.group);
        if (group === undefined) return state;

        return {
            ...state,
            group: wrapAsAsyncDataItem({
                ...group,
                name: action.name,
            }, AsyncDataItemState.LOADED)
        }
    }),
    on(groupActions.SetGroupNameFailure, (state, action): GroupState => {        
        return {
            ...state,
            group: wrapAsAsyncDataItem(state.group.data, AsyncDataItemState.ERROR, action.errMsg)
        }
    }),

    on(groupActions.SetIsPersonInCar, (state, action): GroupState => {
        const group = unwrapAsyncDataItem(state.group);
        if (group === undefined) return state;

        return {
            ...state,
            group: wrapAsAsyncDataItem({
                ...group,
                personDict: {
                    ...group.personDict,
                    [action.personId]: {
                        ...group.personDict[action.personId],
                        isInCar: action.isInCar,
                    }
                }
            }, AsyncDataItemState.LOADED)
        }
    }),
)
