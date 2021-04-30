import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { __indexReducer } from "@Config/models";

const initialState: __indexReducer = {
    todos: [],
    count: 10,
};

const incrementCase: CaseReducer<__indexReducer, PayloadAction<any>> = (state, action) => {
    const value:number = action.payload;
    state.count += value;
}

export const todoSlice = createSlice({
    name: '_indexReducer',
    initialState,
    reducers: {
        increment: incrementCase,
        decrement: (state) => {
            state.count -= 1;
        },
    },
});

export const { increment, decrement } = todoSlice.actions;

export default todoSlice.reducer;
