import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import { Button } from '../../Button'
import {
  Title,
  HistoryTab,
  HistoryList,
  HistoryItem,
} from '../styled'

export const HistoryFC = ({ history, deleteAllHistory }) => {
  return (
    <HistoryTab>
      <Title>History</Title>
      <Button deleteAllHistory={deleteAllHistory} />
      {history.map(({ expression }) => {
        return (
          <HistoryList key={uuidv4()}>
            <HistoryItem>{expression}</HistoryItem>
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
