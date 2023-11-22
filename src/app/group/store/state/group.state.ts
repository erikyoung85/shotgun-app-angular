export const groupFeatureKey = 'groupState';

export type GroupId = string;

export interface GroupState {
    groupId: GroupId;
    allPeople: Person[];
}

export interface Person {
    groupId: number;
    id: number;
    name: string;
    isInCar: boolean;
}
