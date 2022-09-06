import { Component } from 'react'

import { Display } from '../../Display/DisplayCl'
import { History } from '../../History'
import { Keypad } from '../../Keypad'
import { ControlPanel } from '../../ControlPanel'
import { MainContainer, LeftSide } from './styled'
import { expressionCalculator } from '../../../utils/CalculatorCore'
import {
  calculateInput,
  expressionHelper,
} from '../../../helpers'

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expression: '',
      result: '',
      history: [],
      isHistoryOpen: false,
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

  keypadHandle = event => {
    const { expression } = this.state

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
        this.setState({ expression: '' })
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
          this.setState(({ expression }) => {
            return expression
          })
          this.setState(({ expression }) => {
            return {
              result: expressionCalculator(expression),
            }
          })
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
    const { result, expression, history } = this.state

    return (
      <>
        <MainContainer>
          <LeftSide>
            <ControlPanel
              onHistoryClick={this.handleHistoryClick}
            />
            <Display
              result={result.toString()}
              input={expression.toString()}
            />
            <Keypad keypadHandle={this.keypadHandle} />
          </LeftSide>
          {this.state.isHistoryOpen && (
            <History history={history} />
          )}
        </MainContainer>
      </>
    )
  }
}
