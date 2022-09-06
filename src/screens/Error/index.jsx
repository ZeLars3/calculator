import {
  ErrorMessage,
  ErrorContainer,
  ErrorTitle,
} from './styled'

export const Error = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>Page not found</ErrorTitle>
      <ErrorMessage>
        Sorry, this page does not exist
      </ErrorMessage>
    </ErrorContainer>
  )
}
