import { Component } from 'react'

import { Display } from '../../Display/DisplayCl'
import { History } from '../../History'
import { Keypad } from '../../Keypad'
import { ControlPanel } from '../../ControlPanel'
import {
  MainContainer,
  LeftSide,
  Container,
} from '../styled'
import { expressionCalculator } from '../../../utils/CalculatorCore'
import {
  calculateInput,
  expressionHelper,
  saveExpressionToStorage,
} from '../../../helpers'

const getStartValue = key => {
  const keyDataStorage = JSON.parse(
    localStorage.getItem(key),
  )

  return keyDataStorage ? keyDataStorage : []
}

const setDataToStorage = key => {
  localStorage.setItem(
    key,
    JSON.stringify(getStartValue(key)),
  )
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expression: getStartValue('lastInput'),
      result: '',
      history: getStartValue('history'),
      isHistoryOpen: false,
      equal: false,
    }
  }

  componentDidMount() {
    setDataToStorage('lastInput')
    setDataToStorage('history')
  }

  componentDidUpdate(prevProps, prevState) {
    const { result, expression, history, equal } =
      this.state
    if (prevState.equal != equal) {
      this.setState({ expression: result })
    }
    if (prevState.history != history) {
      localStorage.setItem(
        'history',
        JSON.stringify(history),
      )
    }
    if (prevState.expression != expression) {
      localStorage.setItem(
        'lastInput',
        JSON.stringify(expression),
      )
    }
  }

  handleHistoryClick = () => {
    this.setState(prevState => ({
      isHistoryOpen: !prevState.isHistoryOpen,
    }))
  }

  setExpression = exp => {
    this.setState({ expression: exp })
  }

  deleteAllHistory = () => {
    this.setState({ history: [] })
    localStorage.setItem('history', JSON.stringify([]))
  }

  keypadHandle = event => {
    const { expression, result } = this.state

    const lastChar = expression
      .toString()
      .charAt(expression.length - 1)
    const isItOperatorChange =
      lastChar &&
      lastChar.match(/[-+/*%]/g) &&
      event.target.textContent.match(/[-+/*%]/g)

    const changeOperator = () => {
      if (event.target.textContent === lastChar) {
        return
      } else {
        this.setState(({ expression }) => {
          return {
            expression:
              expression.slice(0, -1) +
              event.target.textContent,
          }
        })
        return
      }
    }

    if (isItOperatorChange) {
      changeOperator()
      return
    }

    switch (event.target.textContent) {
      case 'CE': {
        this.setState({
          expression: '',
          result: '',
        })
        break
      }
      case 'C': {
        this.setState(({ expression }) => {
          return {
            expression: expression.slice(
              0,
              expression.length - 1,
            ),
          }
        })
        break
      }
      case '=': {
        try {
          this.setState(({ equal }) => {
            return { equal: !equal }
          })
          this.setState(({ expression }) => {
            return expression
          })
          this.setState(({ expression }) => {
            return {
              result: expressionCalculator(expression),
            }
          })
          saveExpressionToStorage(expression, result)
          this.setState(
            ({ history, expression, result }) => {
              return {
                history: history.concat([
                  { expression, result },
                ]),
              }
            },
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
          this.setExpression,
        )
        this.setState(({ expression }) => {
          if (expression.length > 1) {
            if (
              expression[expression.length - 1] > 0 &&
              expression.indexOf('(') === -1
            ) {
              return {
                result: expressionCalculator(
                  calculateInput(expression),
                ),
              }
            } else return { result: '' }
          } else return { result: '' }
        })
      }
    }
  }

  render() {
    const { result, expression, history, isHistoryOpen } =
      this.state

    return (
      <>
        <MainContainer
          className={isHistoryOpen ? 'open' : ''}>
          <LeftSide>
            <Display
              result={result.toString()}
              input={expression.toString()}
            />
            <Container>
              <Keypad keypadHandle={this.keypadHandle} />
              <ControlPanel
                isHistoryOpen={isHistoryOpen}
                onHistoryClick={this.handleHistoryClick}
              />
            </Container>
          </LeftSide>
          {this.state.isHistoryOpen && (
            <>
              <History
                history={history}
                deleteAllHistory={this.deleteAllHistory}
              />
            </>
          )}
        </MainContainer>
      </>
    )
  }
}
