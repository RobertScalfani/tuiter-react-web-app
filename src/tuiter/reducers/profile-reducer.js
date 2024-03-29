import { createSlice } from "@reduxjs/toolkit";

const currentProfile = {
    firstName: 'Daniel',
    lastName: 'Devito', handle: 'devito-man',
    profilePicture: 'onga.jpg',
    bannerPicture: 'mario.jpg',
    bio: 'Daniel Michael DeVito Jr. (born November 17, 1944) is an American actor, comedian, and filmmaker. He gained prominence for his portrayal of the taxi dispatcher Louie De Palma in the television series Taxi (1978–1983), which won him a Golden Globe Award and an Emmy Award. He plays Frank Reynolds on the FX and FXX sitcom It\'s Always Sunny in Philadelphia (2006–present).',
    website: 'https://en.wikipedia.org/wiki/Danny_DeVito',
    location: 'Philly, PA',
    dateOfBirth: '11/17/1944',
    dateJoined: '1/1/2023',
    followingCount: 12,
    followersCount: 987685,
    tuitCount: 75
};


const profileSlice = createSlice({
    name: 'profile',
    initialState: currentProfile,
    reducers: {
        updateFirstName(state, action) {
            state.firstName = action.payload;
        },
        updateLastName(state, action) {
            state.lastName = action.payload;
        },
        updateBio(state, action) {
            state.bio = action.payload;
        },
        updateLocation(state, action) {
            state.location = action.payload;
        },
        updateWebsite(state, action) {
            state.website = action.payload;
        },
        updateBirthDate(state, action) {
            state.dateOfBirth = action.payload;
        }
    }
});

export const {updateBio, updateLocation, updateWebsite, updateBirthDate, updateFirstName, updateLastName} = profileSlice.actions;

export default profileSlice.reducer;