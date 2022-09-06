import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 42px;
  max-height: 120px;
  background: ${({ theme }) => theme.navBar.primary};
  color: white;
  border: 1px solid #707070;
  font-family: 'Kanit', sans-serif;
`

export const HeaderNav = styled.ul`
  display: flex;
`

export const HeaderItem = styled.li`
  margin-right: 32px;
  font-size: 32px;
  font-width: 100;
  list-style-type: none;
  color: #707070;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0px;
  }
`

export const StyledNavLink = styled(NavLink)`
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

export const HeaderTitle = styled.h1`
  font-size: 32px;
`
