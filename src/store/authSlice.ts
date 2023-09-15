import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isAuthenticated = true;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;