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
  const [history, setHistory] = useState([])
  const [formula, setFormula] = useState([])
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleDigit = number => {
    setInput(input + number)
    setFormula(formula => [...formula, input])
  }

  const handleClear = () => {
    setInput('')
    setFormula([])
    setResult('')
  }

  const handleDelete = () => {
    setInput(input.slice(0, -1))
  }

  const handleHistoryClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

  const handleToggleSign = () => {
    setInput(input.charAt(0) === '-' ? input.slice(1) : '-' + input)
  }

  const handleOperator = operator => {
    setInput(input + operator)
  }

  const handleDecimalPoint = () => {
    if (!input.includes('.')) {
      setInput(input + '.')
    }
  }

  const handleEqual = () => {
    setResult(eval(input))
    setHistory(history => [...history, { input, result }])
    setInput('')
  }

  return (
    <Fragment>
      <MainContainer>
        <LeftSide>
          <HistoryButton onClick={handleHistoryClick}>
            {isHistoryOpen ? 'Hide' : 'Show'} history
          </HistoryButton>
          <Display
            result={result}
            input={input}
            formula={formula}/>
          <Keypad
            onDigit={handleDigit}
            onClear={handleClear}
            onDelete={handleDelete}
            onToggleSign={handleToggleSign}
            onOperator={handleOperator}
            onDecimalPoint={handleDecimalPoint}
            onEqual={handleEqual}
          />
        </LeftSide>
        {isHistoryOpen && <History  history={history}/>}
      </MainContainer>
    </Fragment>
  )
}
