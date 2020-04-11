import { createReducer } from '@reduxjs/toolkit';

import CounterActions from './counter.actions';

const initialCounterState = { value: 0 };

const counterReducer = createReducer(initialCounterState, {
    [CounterActions.increment]: counter => {
        return { value: counter.value + 1 };
    },
    [CounterActions.decrement]: counter => {
        return { value: counter.value - 1 };
    },
});

export default counterReducer;
