import { useState, useEffect } from 'react'

import { DisplayFC } from '../../Display'
import { HistoryFC } from '../../History'
import { KeypadFC } from '../../Keypad'
import { ErrorBoundary } from '../../ErrorBoundary'
import { ControlPanelFC } from '../../ControlPanel'
import {
  MainContainer,
  LeftSide,
  Container,
} from '../styled'
import { expressionCalculator } from '../../../utils'
import {
  calculateInput,
  expressionHelper,
  saveExpressionToStorage,
} from '../../../helpers'

const getStartValue = key => {
  const keyDataLS = JSON.parse(localStorage.getItem(key))
  return keyDataLS ? keyDataLS : []
}

export const CalculatorFC = () => {
  const [expression, setExpression] = useState(
    getStartValue('lastInput'),
  )
  const [result, setResult] = useState('')
  const [history, setHistory] = useState(
    getStartValue('history'),
  )
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [equal, setEqual] = useState(false)

  useEffect(() => setExpression(result), [equal])

  useEffect(
    () =>
      localStorage.setItem(
        'lastInput',
        JSON.stringify(expression),
      ),
    [expression],
  )

  useEffect(() => {
    setHistory(getStartValue('history'))
    setExpression(getStartValue('lastInput'))
  }, [])

  useEffect(
    () =>
      localStorage.setItem(
        'history',
        JSON.stringify(history),
      ),
    [history],
  )

  const handleHistoryClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

  const deleteAllHistory = () => {
    setHistory([])
    localStorage.setItem('history', JSON.stringify([]))
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
          setEqual(equal => !equal)
          setResult(
            expressionCalculator(
              calculateInput(expression),
            ),
          )
          saveExpressionToStorage(expression, result)
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
        <MainContainer
          className={isHistoryOpen ? 'open' : ''}>
          <LeftSide>
            <DisplayFC result={result} input={expression} />
            <Container>
              <KeypadFC keypadHandle={keypadHandle} />
              <ControlPanelFC
                onHistoryClick={handleHistoryClick}
              />
            </Container>
          </LeftSide>
          {isHistoryOpen && (
            <HistoryFC
              history={history}
              deleteAllHistory={deleteAllHistory}
            />
          )}
        </MainContainer>
      </ErrorBoundary>
    </>
  )
}
