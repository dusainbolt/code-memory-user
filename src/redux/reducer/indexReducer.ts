import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type _indexReducer = {
    count: number;
    todos: [];
};


const initialState: _indexReducer = {
    todos: [],
    count: 10,
};

const incrementCase: CaseReducer<_indexReducer, PayloadAction<any>> = (state, action) => {
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
