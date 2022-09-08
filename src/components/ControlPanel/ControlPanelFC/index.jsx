import PropTypes from 'prop-types'

import { HistoryButton } from '../styled'

export const ControlPanelFC = ({
  isHistoryOpen,
  onHistoryClick,
}) => {
  return (
    <HistoryButton onClick={onHistoryClick}>
        {isHistoryOpen ? '▷' : '◁'}
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
