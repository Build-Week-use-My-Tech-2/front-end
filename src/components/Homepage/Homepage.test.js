import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from '@testing-library/user-event'

import Homepage from './Homepage';

test('renders without error', async () => {
    render(<Router> <Homepage /> </Router>)

    const h1 = screen.getByText(/use My Tech/i)
    expect(h1).toBeDefined();

    const button = screen.getByRole('button')
    userEvent.click(button)
});