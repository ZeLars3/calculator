import { Fragment } from 'react'

import { DisplayInfo, DisplayResult } from './index'

export const Display = props => {
  const { input, result } = props

  return (
    <Fragment>
      <DisplayResult>{result}</DisplayResult>
      <DisplayInfo>{input}</DisplayInfo>
    </Fragment>
  )
}
