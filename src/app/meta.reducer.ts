import { Action, ActionReducer, MetaReducer } from "@ngrx/store";

interface State {}

export function consoleLogger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State | undefined, action: Action): State => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('Previous State', state);
        console.log('Action', action);
        console.log('Next State', result);
        console.groupEnd();
        return result;
    };
}

// TODO: Add in metaReducer for LogRocket
export const metaReducers: MetaReducer<State>[] = [consoleLogger]
