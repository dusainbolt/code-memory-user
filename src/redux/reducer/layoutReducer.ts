import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type _LayoutReducer = {
    widthScreen: number;
};

const initialState: _LayoutReducer = {
    widthScreen: 1920,
};

const resizeCase: CaseReducer<_LayoutReducer, PayloadAction<any>> = (state, action) => {
    const value:number = action.payload;
    state.widthScreen = value;
}

export const todoSlice = createSlice({
    name: 'layoutReducer',
    initialState,
    reducers: {
        resize: resizeCase,
    },
});

export const { resize } = todoSlice.actions;

export default todoSlice.reducer;
