import styled from 'styled-components'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 87vh;
  font-family: 'Kanit', sans-serif;
`

export const ErrorTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`

export const ErrorMessage = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
`
