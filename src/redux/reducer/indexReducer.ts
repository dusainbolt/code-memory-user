import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { _indexState } from "@Config/models";

const initialState: _indexState = {
    todos: [],
    count: 10,
};

const incrementCase: CaseReducer<_indexState, PayloadAction<any>> = (state, action) => {
    const value:number = action.payload;
    state.count += value;
}

export const todoSlice = createSlice({
    name: '_indexState',
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
