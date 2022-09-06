import PropTypes from 'prop-types'
import { v4 as uuidV4 } from 'uuid'

import { KEYS } from '../../../constants'
import { KeypadButton, KeypadContainer } from './styled'

export const KeypadFC = ({ keypadHandle }) => {
  const handleOnDigit = e => {
    keypadHandle(e)
  }

  return (
    <KeypadContainer>
      {KEYS.map(item => (
        <KeypadButton
          key={uuidV4()}
          onClick={handleOnDigit}>
          {item}
        </KeypadButton>
      ))}
    </KeypadContainer>
  )
}

KeypadFC.defaultProps = {
  keypadHandle: () => {},
}

KeypadFC.propTypes = {
  keypadHandle: PropTypes.func,
}
