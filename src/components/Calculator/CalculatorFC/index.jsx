import { useState } from 'react'

import { DisplayFC } from '../../Display'
import { HistoryFC } from '../../History'
import { KeypadFC } from '../../Keypad'
import { ErrorBoundary } from '../../ErrorBoundary'
import { ControlPanelFC } from '../../ControlPanel'
import { MainContainer, LeftSide } from './styled'
import { expressionCalculator } from '../../../utils'
import {
  calculateInput,
  expressionHelper,
} from '../../../helpers'

export const CalculatorFC = () => {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')
  const [history, setHistory] = useState([])
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  const handleHistoryClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

  const keypadHandle = event => {
    const lastChar = expression
      .toString()
      .charAt(expression.length - 1)
    const isItOperatorChange =
      lastChar &&
      lastChar.match(/[-+/*%]/g) &&
      event.target.textContent.match(/[-+/*%]/g)

    if (isItOperatorChange) {
      changeOperator()
      return
    }

    switch (event.target.textContent) {
      case 'CE': {
        setExpression('')
        break
      }
      case 'C': {
        setExpression(
          expression.slice(0, expression.length - 1),
        )
        break
      }
      case '=': {
        try {
          setResult(
            expressionCalculator(
              calculateInput(expression),
            ),
          )
          setHistory(
            history.concat([{ expression, result }]),
          )
        } catch (error) {
          console.log(error)
        }
        break
      }
      default: {
        const temp = event.target.textContent
        expressionHelper(
          temp,
          expression,
          setExpression,
          setResult,
        )
        setResult(() => {
          if (expression.length > 1) {
            if (
              expression[expression.length - 1] > 0 &&
              expression.indexOf('(') === -1
            ) {
              return expressionCalculator(expression)
            } else return ''
          } else return ''
        })
      }
    }

    function changeOperator() {
      if (event.target.textContent === lastChar) {
        return
      } else {
        setExpression(lastValue => {
          return (
            lastValue.slice(0, -1) +
            event.target.textContent
          )
        })
        return
      }
    }
  }

  return (
    <>
      <ErrorBoundary>
        <MainContainer>
          <LeftSide>
            <ControlPanelFC
              onHistoryClick={handleHistoryClick}
            />
            <DisplayFC result={result} input={expression} />
            <KeypadFC keypadHandle={keypadHandle} />
          </LeftSide>
          {isHistoryOpen && <HistoryFC history={history} />}
        </MainContainer>
      </ErrorBoundary>
    </>
  )
}
