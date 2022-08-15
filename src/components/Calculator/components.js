import styled from 'styled-components'

const MainContainer = styled.div`
  background: ${({ theme }) =>
    theme.backgroundColor.primary};
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 5px 15px;
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export { MainContainer, LeftSide }
