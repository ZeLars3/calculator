import styled from 'styled-components'

const HistoryButton = styled.button`
  border: none;
  border-radius: 5px;
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  padding: 5px;
  margin: 5px;
  max-width: 200px;
  background: ${({ theme }) => theme.navBar.primary};
  color: ${({ theme }) => theme.textColor.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: white;
  }
`

export { HistoryButton }
