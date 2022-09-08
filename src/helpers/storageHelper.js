export const saveExpressionToStorage = (
  expression,
  result,
) => {
  if (localStorage.getItem('history')) {
    localStorage.setItem(
      'history',
      JSON.stringify(
        JSON.parse(localStorage.getItem('history')).concat([
          { expression: expression, result: result },
        ]),
      ),
    )
  }

  localStorage.setItem(
    'history',
    JSON.stringify(
      Array.of({
        expression: expression,
        result: result,
      }),
    ),
  )
}

export const saveThemeToStorage = theme => {
  if (localStorage.getItem('theme')) {
    localStorage.setItem(
      'theme',
      JSON.stringify(
        JSON.parse(localStorage.getItem('theme')),
      ),
    )
  }

  localStorage.setItem('theme', JSON.stringify(theme))
}
