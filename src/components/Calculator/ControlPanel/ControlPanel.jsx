import PropTypes from 'prop-types'
import { Component } from 'react'

import { HistoryButton } from './index'

export class ControlPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onHistoryClick, isHistoryOpen } = this.props

    return (
      <HistoryButton onClick={onHistoryClick}>
        {isHistoryOpen ? 'Hide' : 'Show'} history
      </HistoryButton>
    )
  }
}

ControlPanel.defaultProps = {
  isHistoryOpen: false,
  onHistoryClick: () => {},
}

ControlPanel.propTypes = {
  isHistoryOpen: PropTypes.bool,
  onHistoryClick: PropTypes.func,
}
