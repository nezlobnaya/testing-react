import React from 'react'
import { render, screen } from '@testing-library/react'
import MissionsList from './MissionsList'

const missions = [
    { mission_name: 'Mission 1', mission_id: 'mission_id_1'},
    { mission_name: 'Mission 2', mission_id: 'mission_id_2'}
]

test('renders without errors', () => {
    render(<MissionsList missions={[]} />)
})

test('renders change in mission list correctly', () => {
    // Act: 
    render(<MissionsList missions={[]} />)
    // Arrange:
    // Assert:
})