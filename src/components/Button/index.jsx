import { Component } from 'react'
import { ButtonWrapper } from './styled'

export class Button extends Component {
  render() {
    const { deleteAllHistory } = this.props
    return (
      <ButtonWrapper>
        <button onClick={deleteAllHistory}>
          Clear History
        </button>
      </ButtonWrapper>
    )
  }
}
