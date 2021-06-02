import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/react'
import MissionForm from './MissionForm'

test('MissionForm renders correctly without errors', () => {
    render(<MissionForm />);
})

// Does the component render correctly when isFetchingData is true?
test('render message correctly when isFetchingData is true', () => {
    // Arrange: Show MissionForm with isFetchingData = true
    render(<MissionForm isFetchingData={true} />)
    // Act: Query the text 'we are fetching data'
    const item = screen.queryByText(/we are fetching data/i)
    // Assert: 'we are fetching data' exists on the page
    expect(item).not.toBeNull();
    expect(item).toBeInTheDocument();
})
// Does the component render correctly when isFetchingData is false?
test('render message correctly when isFetchingData is false', () => {
    // Arrange: Show MissionForm with isFetchingData = false
    render(<MissionForm isFetchingData={false} />)
    // Act: query Button 
    const item = screen.queryByRole(/button/i)

    // Assert: 'we are fetching data' NOT exists on the page, button on page
    expect(item).toBeInTheDocument();
})
// When we have a piece of user input, does getData execute?
test('calls getData when button is clicked', () => {})