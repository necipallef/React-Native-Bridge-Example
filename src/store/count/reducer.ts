import {createReducer} from 'deox';
import {CounterState} from './state';
import {decrementCountAction, incrementCountAction, setCountAction} from './action';

const initialState: CounterState = {
    currentCount: 0,
};

export const counterReducer = createReducer(
    initialState,
    handle => [
        handle(incrementCountAction, state => {
            return {
                ...state,
                currentCount: state.currentCount + 1,
            };
        }),
        handle(decrementCountAction, state => {
            return {
                ...state,
                currentCount: state.currentCount - 1,
            };
        }),
        handle(setCountAction, (state, action) => {
            return {
                ...state,
                currentCount: action.payload.newCount,
            };
        }),
    ],
);
