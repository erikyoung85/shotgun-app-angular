import { PersonResponseDtoV1 } from "./PersonResponseDtoV1.interface";

export interface GetGroupResponseDtoV1 {
    id: number;
    name: string;
    people: PersonResponseDtoV1[]
}
