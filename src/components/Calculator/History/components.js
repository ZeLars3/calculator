import styled from 'styled-components'

const HistoryTab = styled.div`
  padding: 20px;
  border-left: 1px solid #707070;
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  margin: 0 auto;
  font-family: 'Kanit', sans-serif;
`

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const HistoryItem = styled.li`
  margin: 10px;
  font-family: 'Kanit', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid #707070;
  padding-top: 10px;
  `

export { HistoryTab, Title, HistoryList, HistoryItem }
