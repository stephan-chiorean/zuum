import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state,action) => {
            state.origin = action.payload
        },
        setDestination: (state,action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state,action) => {
            state.travelTimeInformation = action.payload
        },
    },

})

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

//above is how we push things to the data layer

//below is how we select things and pull things from the data layer

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;