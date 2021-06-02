import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/react'
import MissionForm from './MissionForm'

test('MissionForm renders correctly without errors', () => {
    render(<MissionForm />);
})

// Does the component render correctly when isFetchingData is true?
test('render message correctly when isFetchingData is true', () => {})
// Does the component render correctly when isFetchingData is false?
test('render message correctly when isFetchingData is false', () => {})
// When we have a piece of user input, does getData execute?
test('calls getData when button is clicked', () => {})