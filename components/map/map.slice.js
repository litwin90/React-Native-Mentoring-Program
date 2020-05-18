import { createSlice } from '@reduxjs/toolkit';
import Geolocation from '@react-native-community/geolocation';

const initialState = {
    isLoading: false,
    error: undefined,
    currentPosition: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
};

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        fetchCurrentPosition(state) {
            state.isLoading = true;
        },
        getSuccessCurrentPosition(state, action) {
            state.isLoading = false;
            state.currentPosition.latitude = action.payload.coords.latitude;
            state.currentPosition.longitude = action.payload.coords.longitude;
        },
        getFailedCurrentPosition(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
    },
});

export const MapActions = {
    ...mapSlice.actions,
};

export default mapSlice.reducer;

export const fetchGetCurrentPosition = () => (dispatch, getState) => {
    dispatch(MapActions.fetchCurrentPosition());
    Geolocation.getCurrentPosition(
        info => {
            dispatch(MapActions.getSuccessCurrentPosition({ coords: info.coords }));
        },
        error => {
            dispatch(MapActions.getFailedCurrentPosition({ error: error.message }));
        },
    );
};
