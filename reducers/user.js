import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    username: [],
    cities: [],
};

export const userSlice = createSlice({
    name: 'user', 
    initialState, 
    reducers: {
        addUserName: (state, action) => {
            state.username.push(action.payload);
        },
        addFavoriteCity: (state, action) => {
            state.cities.push(action.payload);
        },
        deleteCity: (state, action) => {
            state.cities = state.cities.filter(element => element.city !== action.payload);
        }
    },
});

export const { addUserName, addFavoriteCity, deleteCity } = userSlice.actions;
export default userSlice.reducer;