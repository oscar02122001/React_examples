import {
    NavLink
} from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div `
height: 40px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: blue;
color: #fff;
/* .active{
    color:red;
} */

`

// export const Style = {
//     color: `${(prop)=>{return prop.isActive? "red" : "white"}}`

// }

export const NavItem = styled(NavLink)
`color: ${({active})=> (active ? "red": 'white')} !important;
text-decoration: none;
color: #fff;
`

// export const NavItem = styled(NavLink).attrs(() => {
//     return {
//         activeStyle: style
//     }
// })
// `
// text-decoration: none;
// color: #fff;
// `