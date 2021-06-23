import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from "react-router-dom";
import Renter from './Renter';

test('renders without error', async () => {
    render(<Router> <Renter /> </Router>)

    const button = screen.getByRole('button')
    userEvent.click(button)
});