import styled from 'styled-components'

export const HistoryButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  max-width: 200px;
  background: ${({ theme }) => theme.navBar.primary};
  color: ${({ theme }) => theme.textColor.primary};
  font-family: 'Kanit', sans-serif;
  font-size: 20px;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: white;
  }
`
