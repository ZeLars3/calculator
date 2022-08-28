import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import {
  Title,
  HistoryTab,
  HistoryList,
  HistoryItem,
} from './index'

export const HistoryFC = ({ history }) => {
  return (
    <HistoryTab>
      <Title>History</Title>
      {history.map(({ input }) => {
        return (
          <HistoryList key={uuidv4()}>
            <HistoryItem>{input}</HistoryItem>
          </HistoryList>
        )
      })}
    </HistoryTab>
  )
}

HistoryFC.defaultProps = {
  history: [],
}

HistoryFC.propTypes = {
  history: PropTypes.array,
}
