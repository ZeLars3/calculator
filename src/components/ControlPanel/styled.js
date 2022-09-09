import styled from 'styled-components'

export const HistoryButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  max-width: 200px;
  max-height: 40px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Kanit', sans-serif;
  font-size: 20px;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundHover};
    color: white;
  }
`
