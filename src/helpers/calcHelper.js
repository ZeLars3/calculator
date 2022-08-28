const calculateInput = input =>
  (Math.round(eval(input) * 1000) / 1000).toString()

export { calculateInput }
