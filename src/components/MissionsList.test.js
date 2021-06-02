import React from 'react'
import { render, screen } from '@testing-library/react'
import MissionsList from './MissionsList'

test('renders without errors', () => {
    render(<MissionsList missions={[]} />)
})