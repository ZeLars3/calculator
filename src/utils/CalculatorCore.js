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
const AddCommand = 'AddCommand',
      SubCommand = 'SubCommand',
      MulCommand = 'MulCommand',
      DivCommand = 'DivCommand'

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
      var command = commands.pop()
      if (commands.length === 0) {
        return 0
      }

      value = command.undo(value, command.value)
      return value
    },
  }
}

export {
  CalculatorCore,
  Commands,
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
}
