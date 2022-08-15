import { Fragment } from 'react'
import PropTypes from 'prop-types'

import { DisplayInfo, DisplayResult } from './index'

export const Display = ({ input, result }) => {
  return (
    <Fragment>
      <DisplayResult>{result}</DisplayResult>
      <DisplayInfo>{input}</DisplayInfo>
    </Fragment>
  )
}

Display.defaultProps = {
  input: '',
  result: '',
}

Display.propTypes = {
  input: PropTypes.string,
  result: PropTypes.string,
}
