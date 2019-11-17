import {UIState} from './state';
import {createReducer} from 'deox';
import {changeBusyAction} from './action';

const initialState: UIState = {
    busy: false,
    busyCount: 0,
};

export const uiReducer = createReducer(
    initialState,
    handle => [
        handle(changeBusyAction, (state, action) => {
            let busyCount = state.busyCount + (action.payload.busy ? 1 : -1);
            if (busyCount < 0) {
                busyCount = 0;
            }

            return {
                ...state,
                busyCount,
                busy: busyCount > 0,
            };
        }),
    ],
);
