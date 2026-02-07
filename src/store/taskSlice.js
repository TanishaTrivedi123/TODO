import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state,action) => {
            return state = [action.payload, ...state]
        }
    }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;