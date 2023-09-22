/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../store/authSlice'
import Navbar from "./Navbar";

const store = configureStore({
    reducer: {
        authentication: authReducer,
    },
});

describe("Navbar Component", () => {
    it("render Navbar correctly", () => {
        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );
        const homeLinkElement = screen.getByText('Home')
        expect(homeLinkElement).toBeInTheDocument();
    });
    it('Sign In button is clicked', () => {
        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );
        const signInButton = screen.getByText("Sign In")
        fireEvent.click(signInButton);

        const signIOutButton = screen.getByText("Sign Out")
        expect(signIOutButton).toBeInTheDocument();
    });

    test('Sign Out button is clicked', () => {
        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );
        const signOutButton = screen.getByRole('button', {
            name: "Sign Out"
        })
        fireEvent.click(signOutButton);
        const signInButton = screen.getByRole('button', {
            name: "Sign In"
        })
        expect(signInButton).toBeInTheDocument();
    });
});
