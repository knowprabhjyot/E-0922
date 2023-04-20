import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 20px;
`
const NavItem = styled.li`
    border: 1px solid aqua; 
    padding: 10px 10px;
`

export default function Nav() {
    return (
        <NavContainer>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/count">Counter</Link>
            </NavItem>

        </NavContainer>
    )
}
