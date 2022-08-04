import styled from 'styled-components'

const HeaderBlock = styled.header`
  background-color: #434343;
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

const HeaderLink = styled.li`
  list-style-type: none;
  font-size: 28px;
  font-width: 100;
  color: #707070;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }

  &:first-child {
    margin-right: 30px;
  }
`

const HeaderTitle = styled.h1`
  font-size: 30px;
`

export { HeaderBlock, HeaderNav, HeaderLink, HeaderTitle }
