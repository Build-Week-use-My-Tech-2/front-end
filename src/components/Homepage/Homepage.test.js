import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from './Homepage';

test('renders without error', async () => {
    render(<Router> <Homepage /> </Router>)
});