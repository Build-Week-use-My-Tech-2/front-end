import React from 'react'
import { render } from '@testing-library/react'
import RentedItems from './RentedItems';

test('renders without error', async () => {
    render(<RentedItems />)
});