import PropTypes from 'prop-types'
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  Title,
  HistoryTab,
  HistoryList,
  HistoryItem,
} from './styled'

export class History extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { history } = this.props

    return (
      <HistoryTab>
        <Title>History</Title>
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
}

History.defaultProps = {
  history: [],
}

History.propTypes = {
  history: PropTypes.array,
}
