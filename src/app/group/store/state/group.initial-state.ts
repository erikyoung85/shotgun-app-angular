import { AsyncDataItemState, wrapAsAsyncDataItem } from "src/app/shared/utils/aysnc-data-item";
import { GroupState } from "./group.state";

export const INITIAL_GROUP_STATE: GroupState = {
    group: wrapAsAsyncDataItem(undefined, AsyncDataItemState.IDLE),
}