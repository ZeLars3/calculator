import styled from 'styled-components'

export const HistoryTab = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100vh;
  border-left: 3px solid #707070;
`
export const Title = styled.h2`
  margin: 0 auto;
  margin-bottom: 20px;
  font: normal normal normal 32px/38px 'Kanit', sans-serif;
`

export const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const HistoryItem = styled.li`
  margin: 10px;
  cursor: pointer;
  padding-top: 5px;
  font: normal normal normal 30px/36px 'Kanit', sans-serif;
`
