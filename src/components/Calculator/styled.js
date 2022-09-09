import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 5px 15px;
  background: ${({ theme }) =>
    theme.colors.backgroundColor};

  &.open {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`
