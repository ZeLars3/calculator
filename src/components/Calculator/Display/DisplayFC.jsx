import PropTypes from 'prop-types'

import { DisplayInfo, DisplayResult } from './index'

export const DisplayFC = ({ input, result }) => {
  return (
    <>
      <DisplayResult>{result}</DisplayResult>
      <DisplayInfo>{input}</DisplayInfo>
    </>
  )
}

DisplayFC.defaultProps = {
  input: '',
  result: '',
}

DisplayFC.propTypes = {
  input: PropTypes.string,
  result: PropTypes.string,
}
