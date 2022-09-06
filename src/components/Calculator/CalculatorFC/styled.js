import styled from 'styled-components'

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 5px 15px;
  background: ${({ theme }) =>
    theme.backgroundColor.primary};
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
