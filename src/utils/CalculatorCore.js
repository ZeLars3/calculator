const add = (x, y) => x + y
const subtract = (x, y) => x - y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y

class Command {
  constructor(execute, undo, value) {
    this.execute = execute
    this.undo = undo
    this.value = value
  }
}

const Commands = {
  AddCommand: function (value) {
    return new Command(add, subtract, value)
  },
  SubCommand: function (value) {
    return new Command(subtract, add, value)
  },
  MulCommand: function (value) {
    return new Command(multiply, divide, value)
  },
  DivCommand: function (value) {
    return new Command(divide, multiply, value)
  },
}
const AddCommand = '+',
  SubCommand = '-',
  MulCommand = '*',
  DivCommand = '/'

const CalculatorCore = () => {
  const commands = []
  let value = 0

  return {
    execute: command => {
      value = command.execute(value, command.value)
      commands.push(command)
      return value
    },
    undo: () => {
      const command = commands.pop()
      if (commands.length === 0) {
        return 0
      }

      value = command.undo(value, command.value)
      return value
    },
  }
}

const operations = (value, operand, currentValue) => {
  switch (operand) {
    case Commands.AddCommand:
      return add(value, currentValue)
    case Commands.SubCommand:
      return subtract(value, currentValue)
    case Commands.MulCommand:
      return multiply(value, currentValue)
    case Commands.DivCommand:
      return divide(value, currentValue)
    default:
      return value
  }
}

const calculatorLogic = (expression = '') => {
  const calculator = CalculatorCore()

  const expressionArray = expression.split(' ')
  const expressionLength = expressionArray.length
  let currentValue = 0
  let operand = ''
  let value = 0
  const result = 0

  for (let i = 0; i < expressionLength; i++) {
    const currentExpression = expressionArray[i]
    if (currentExpression === AddCommand ||
        currentExpression === SubCommand ||
        currentExpression === MulCommand ||
        currentExpression === DivCommand
        ) {
      operand = currentExpression
      value = currentValue
      currentValue = 0
    } else {
      currentValue = parseInt(currentExpression)
    }
  }
  return result
}

export { calculatorLogic }
