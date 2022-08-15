import PropTypes from 'prop-types'

import {
  Title,
  HistoryTab,
  HistoryList,
  HistoryItem,
} from './index'

export const History = ({ history }) => {
  return (
    <HistoryTab>
      <Title>History</Title>
        {history.map((item, index) => {
          return (
            <HistoryList key={index}>
              <HistoryItem>{item.input}</HistoryItem>
            </HistoryList>
          )
        })}
    </HistoryTab>
  )
}

History.defaultProps = {
  history: [],
}

History.propTypes = {
  history: PropTypes.array,
}
