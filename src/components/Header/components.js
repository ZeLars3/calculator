import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderBlock = styled.header`
  background: ${({ theme }) => theme.navBar.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 42px;
  border: 1px solid #707070;
  max-height: 120px;
  font-family: 'Kanit', sans-serif;
`

const HeaderNav = styled.ul`
  display: flex;
`

const HeaderItem = styled.li`
  list-style-type: none;
  font-size: 32px;
  font-width: 100;
  color: #707070;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:first-child {
    margin-right: 32px;
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
  font-size: 32px;
`

export {
  HeaderBlock,
  HeaderNav,
  HeaderTitle,
  HeaderItem,
  StyledNavLink,
}
