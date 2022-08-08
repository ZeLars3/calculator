import {
  Title,
  HistoryTab,
  HistoryList,
  HistoryItem,
} from './index'

export const History = props => {
  const { history } = props

  return (
    <HistoryTab>
      <Title>History</Title>
      <div>
        {history.map((item, index) => {
          return (
            <HistoryList key={index}>
              <HistoryItem>
                {item.input} = {item.result}
              </HistoryItem>
            </HistoryList>
          )
        })}
      </div>
    </HistoryTab>
  )
}
