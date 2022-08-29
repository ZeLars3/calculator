import { useState } from 'react'

import { DisplayFC } from './Display'
import { HistoryFC } from './History'
import { KeypadFC } from './Keypad'
import { ControlPanelFC } from './ControlPanel'
import { MainContainer, LeftSide } from './index'
import { expressionCalculator } from '../../utils/CalculatorCore'
import { calculateInput } from '../../helpers'
import { ErrorBoundary } from '../ErrorBoundary'

export const CalculatorFC = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [history, setHistory] = useState([])
  const [formula, setFormula] = useState([])

  const handleDigit = number => {
    setInput(prevState => prevState + number)
    setFormula(prevState => prevState.concat(number))
  }

  const handleClear = () => {
    setInput('')
    setFormula([])
    setResult('')
  }

  const handleDelete = () => {
    setInput(prevState => prevState.slice(0, -1))
  }

  const handleToggleSign = () => {
    setInput(prevState => {
      prevState.charAt(0) === '-'
        ? prevState.slice(1)
        : '-' + prevState
    })
  }

  const handleOperator = operator => {
    const lastChar = input[input.length - 1]
    const isOperator = [
      '+',
      '-',
      '*',
      '/',
      '(',
      ')',
    ].includes(lastChar)

    isOperator
      ? (setInput(
          prevState => prevState.slice(0, -1) + operator,
        ),
        setFormula(prevState => prevState.concat(operator)))
      : (setInput(prevState => prevState + operator),
        setFormula(prevState => prevState.concat(operator)))
  }

  const handleDecimalPoint = () => {
    if (!input.includes('.')) {
      setInput(prevState => prevState + '.')
    }
  }

  const handleHistoryClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

  const handleEqual = () => {
    setResult(expressionCalculator(calculateInput(input))),
      setFormula(input),
      setHistory(formula),
      setInput('')
  }

  return (
    <>
      <ErrorBoundary>
        <MainContainer>
          <LeftSide>
            <ControlPanelFC
              onHistoryClick={handleHistoryClick}
            />
            <DisplayFC result={result} input={input} />
            <KeypadFC
              onDigit={handleDigit}
              onClear={handleClear}
              onDelete={handleDelete}
              onToggleSign={handleToggleSign}
              onOperator={handleOperator}
              onDecimalPoint={handleDecimalPoint}
              onEqual={handleEqual}
            />
          </LeftSide>
          {isHistoryOpen && <HistoryFC history={history} />}
        </MainContainer>
      </ErrorBoundary>
    </>
  )
}
