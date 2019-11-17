import {createAction} from 'deox';

export const changeBusyAction = createAction(
    'CHANGE_BUSY',
    resolve => (busy: boolean) =>
        resolve({busy}),
);
