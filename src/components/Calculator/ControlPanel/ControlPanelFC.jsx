import PropTypes from 'prop-types'

import { HistoryButton } from './index'

export const ControlPanelFC = ({
  isHistoryOpen,
  onHistoryClick,
}) => {
  return (
    <HistoryButton onClick={onHistoryClick}>
      {isHistoryOpen ? 'Hide' : 'Show'} history
    </HistoryButton>
  )
}

ControlPanelFC.defaultProps = {
  isHistoryOpen: false,
  onHistoryClick: () => {},
}

ControlPanelFC.propTypes = {
  isHistoryOpen: PropTypes.bool,
  onHistoryClick: PropTypes.func,
}
