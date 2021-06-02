import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('render App without error', () => {
    render(<App />)
})

test('renders mission data when button is clicked', () => {

})