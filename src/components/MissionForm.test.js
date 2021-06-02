import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    const button = screen.queryByRole(/button/i)

    // Assert: 'we are fetching data' NOT exists on the page, button on page
    expect(button).toBeInTheDocument();
})
// When we have a piece of user input, does getData execute?
test('calls getData when button is clicked', () => {
    const fakeGetData = jest.fn(() => {
        return ('this is fake data')
    });
    // Make sure we can see our button
    // Arrange:
    render(<MissionForm isFetchingData={false} getData={fakeGetData} />)
    // Act:
    const button = screen.getByRole('button');
    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)
    // Assert:
    console.log(fakeGetData.mock);
})