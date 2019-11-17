import {createAction} from 'deox';

export const incrementCountAction = createAction('INCREMENT_COUNT');

export const decrementCountAction = createAction('DECREMENT_COUNT');

export const setCountAction = createAction(
    'SET_COUNT',
    resolve => (newCount: number) => resolve({newCount}),
);
