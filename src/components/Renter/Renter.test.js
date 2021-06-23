import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import Renter from './Renter';

test('renders without error', async () => {
    render(<Router> <Renter /> </Router>)
});