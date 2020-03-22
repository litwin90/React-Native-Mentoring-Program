import {createAction} from '@reduxjs/toolkit';

export default {
    increment: createAction('INCREMENT'),
    decrement: createAction('DECREMENT'),
};
