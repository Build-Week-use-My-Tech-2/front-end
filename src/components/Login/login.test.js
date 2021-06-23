import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import Login from './Login';

test('renders without error', async () => {
    render(<Router> <Login /> </Router>)
});