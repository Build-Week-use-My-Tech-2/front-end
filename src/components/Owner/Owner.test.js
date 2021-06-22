import React from 'react'
import { render } from '@testing-library/react'
import Owner from './Owner';

test('render without error', async () => {
    render(<Owner />)
})