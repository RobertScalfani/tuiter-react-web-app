import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "unk",
    "handle": "devito-man",
    "userAvatar": "onga.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Casual Tuiter Thoughts",
    "time": "1m",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "isUserPost": false
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...templateTuit,
                ...action.payload,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;