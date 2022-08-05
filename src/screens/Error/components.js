import styled from 'styled-components'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 87vh;
  font-family: 'Kanit', sans-serif;
`

const ErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`

export { ErrorContainer, ErrorTitle, ErrorMessage }
