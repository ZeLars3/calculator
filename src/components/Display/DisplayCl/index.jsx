import PropTypes from 'prop-types'
import { Component } from 'react'

import { DisplayInfo, DisplayResult } from '../styled'

export class Display extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { result, input } = this.props

    return (
      <>
        <DisplayResult>{result}</DisplayResult>
        <DisplayInfo>{input}</DisplayInfo>
      </>
    )
  }
}

Display.defaultProps = {
  input: '',
  result: '',
}

Display.propTypes = {
  input: PropTypes.string,
  result: PropTypes.string,
}
