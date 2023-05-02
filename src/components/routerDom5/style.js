import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div `
height: 40px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: blue;
color: #fff;

`

export const NavItem = styled(NavLink) `
text-decoration: none;
color: #fff;
`