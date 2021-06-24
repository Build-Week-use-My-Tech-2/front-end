import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

test("App renders", () => {
    render(<Router> <App /> </Router>)
});
