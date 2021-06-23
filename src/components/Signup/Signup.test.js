import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import Signup from './Signup';

test('render without error', async () => {
    render(<Router> <Signup /> </Router>)
});