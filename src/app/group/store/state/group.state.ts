import { AsyncDataItem } from "src/app/shared/utils/aysnc-data-item";

export const groupFeatureKey = 'groupState';

export interface GroupState {
    group: AsyncDataItem<Group | undefined>;
}

export interface Group {
    id: number;
    name: string;
    personDict: {
        [personId: number]: Person
    };
}

export interface Person {
    groupId: number;
    id: number;
    name: string;
    isInCar: boolean;
}
