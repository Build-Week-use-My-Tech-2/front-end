import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import Login from './Login';

test('renders without error', async () => {
    render(<Router> <Login /> </Router>)
});

test('render message correctly when isFetchingData is true', () => {
    render(<Router> <Login isFetchingData={true} /> </Router>)

    const item = screen.queryByText(/dont have an account/i)

    expect(item).not.toBeNull();
    expect(item).toBeInTheDocument();
});
