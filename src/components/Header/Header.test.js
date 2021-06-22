import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header';

test('render without error', () => {
    render(<Header />)
})