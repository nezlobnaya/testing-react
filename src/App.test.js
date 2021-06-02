import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

import { fetchMissions as mockFetchMissions } from './api/fetchMissions'
jest.mock('./api/fetchMissions')

mockFetchMissions.mockResolvedValueOnce({
    data: [
        {mission_name: "Mission 1", mission_id: 'mission_id_1'},
        {mission_name: "Mission 2", mission_id: 'mission_id_2'}
    ]
})

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
    await waitFor(() => {
        expect(screen.getAllByTestId('mission')).toHaveLength(10);
    })
})