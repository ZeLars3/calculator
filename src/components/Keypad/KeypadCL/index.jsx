import PropTypes from 'prop-types'
import { Component } from 'react'
import { v4 as uuidV4 } from 'uuid'

import { KEYS } from '../../../constants'
import { KeypadButton, KeypadContainer } from '../styled'

export class Keypad extends Component {
  constructor(props) {
    super(props)
  }

  handleOnDigit = e => {
    this.props.keypadHandle(e)
  }

  render() {
    return (
      <KeypadContainer>
        {KEYS.map(item => (
          <KeypadButton
            key={uuidV4()}
            onClick={this.handleOnDigit}>
            {item}
          </KeypadButton>
        ))}
      </KeypadContainer>
    )
  }
}

Keypad.defaultProps = {
  keypadHandle: () => {},
}

Keypad.propTypes = {
  keypadHandle: PropTypes.func,
}
