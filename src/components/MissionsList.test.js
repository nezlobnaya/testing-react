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
    const { rerender } = render(<MissionsList missions={[]} />)
    // Arrange:
    let missionObjects = screen.queryAllByTestId('mission')
    // Assert:
    expect(missionObjects).toEqual([])
    expect(missionObjects).toHaveLength(0)

    rerender(<MissionsList missions={missions} />)
    missionObjects = screen.queryAllByTestId('mission')
    expect(missionObjects).toHaveLength(2)

})