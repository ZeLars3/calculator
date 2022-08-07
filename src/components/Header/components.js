import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderBlock = styled.header`
  background: ${({ theme }) => theme.navBar.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border: 1px solid #707070;
  font-family: 'Kanit', sans-serif;
`

const HeaderNav = styled.ul`
  display: flex;
`

const HeaderItem = styled.li`
  list-style-type: none;
  font-size: 28px;
  font-width: 100;
  color: #707070;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:first-child {
    margin-right: 30px;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #707070;
  font-size: 28px;
  font-weight: bold;
  font-width: 100;

  &.active {
    color: white;
    text-decoration: underline;
  }
`

const HeaderTitle = styled.h1`
  font-size: 30px;
`

export {
  HeaderBlock,
  HeaderNav,
  HeaderTitle,
  HeaderItem,
  StyledNavLink,
}
