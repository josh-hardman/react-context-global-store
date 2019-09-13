import React from 'react'
import Consumers from './consumers'

export default key => WrappedComponent => {
  const Consumer = Consumers[key]
  if (!Consumer) {
    throw new Error(`No consumer exists with the key: ${key}`)
  }
  const withUsers = ({ ...props }) => (
    <Consumer>
      {contextValues => <WrappedComponent {...props} {...contextValues} />}
    </Consumer>
  )

  return withUsers
}
