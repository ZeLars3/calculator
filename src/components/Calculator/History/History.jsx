import PropTypes from 'prop-types'
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  Title,
  HistoryTab,
  HistoryList,
  HistoryItem,
} from './index'

export class History extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { history } = this.props

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
}

History.defaultProps = {
  history: [],
}

History.propTypes = {
  history: PropTypes.array,
}
