import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('render App without error', () => {
    render(<App />)
})

test('renders mission data when button is clicked', async () => {
    // Arrange: render app
    render(<App />)
    // Act: get data from api? and push button
    const button = screen.getByRole('button')
    userEvent.click(button)
    // Assert: we should see same number of missions when api returns
})