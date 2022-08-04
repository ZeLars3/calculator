import { useState, Fragment } from 'react'

import { Display } from './Display'
import { History } from './History'
import { Keypad } from './Keypad'
import {
  MainContainer,
  LeftSide,
  HistoryButton,
} from './index'

export const Calculator = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  const handleHistoryClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

  return (
    <Fragment>
      <MainContainer>
        <LeftSide>
          <HistoryButton onClick={handleHistoryClick}>
            {isHistoryOpen ? 'Hide' : 'Show'} history
          </HistoryButton>
          <Display />
          <Keypad />
        </LeftSide>
        {isHistoryOpen && <History />}
      </MainContainer>
    </Fragment>
  )
}
