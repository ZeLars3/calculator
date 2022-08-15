import PropTypes from 'prop-types'

import { HistoryButton } from './index'

export const ControlPanel = ({
  isHistoryOpen,
  onHistoryClick,
}) => {
  return (
    <HistoryButton onClick={onHistoryClick}>
      {isHistoryOpen ? 'Hide' : 'Show'} history
    </HistoryButton>
  )
}

ControlPanel.defaultProps = {
  isHistoryOpen: false,
  onHistoryClick: () => {},
}

ControlPanel.propTypes = {
  isHistoryOpen: PropTypes.bool,
  onHistoryClick: PropTypes.func,
}
