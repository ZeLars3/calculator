const parse = str => {
  return Function(`'use strict'; return (${str})`)()
}

export const calculateInput = input =>
  (Math.round(parse(input) * 1000) / 1000).toString()

export const expressionHelper = (
  temp,
  expression,
  setExpression,
) => {
  const operand = '/*-+%.()'

  switch (operand.includes(temp)) {
    case true: {
      if (temp !== '.') {
        setExpression(expression + temp)
      } else {
        const tempExpres = `${expression}.`
        if (/\d+\.\d+\.|\d+\.\./.test(tempExpres)) {
          alert('Error!')
        } else setExpression(expression + `${temp}`)
      }
      break
    }
    case false: {
      setExpression(expression + temp)
      break
    }
    default: {
      return 0
    }
  }
}
