import React, { Component } from 'react'

const initialState = {
  name: 'Joe Smith',
  email: '',
  nicknames: []
}

export default class Provider extends Component {
  state = initialState

  // Helper Methods
  setStore = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  // Methods passed to consumer
  methods = {
    // Generic methods
    reset: () => {
      this.setState(initialState)
    },
    setJoshProfile: () => {
      this.methods.setName('Josh')
      this.methods.setEmail('jhardman0830@gmail.com')
      this.methods.setNicknames(['Josh', 'J-Dizzle', 'Jman'])
    },
    setName: name => this.setStore('name', name),
    setEmail: email => this.setStore('email', email),
    setNicknames: nicknames => this.setStore('nicknames', nicknames)
  }

  render() {
    return (
      <UsersContext.Provider
        value={{ usersStore: { ...this.state, ...this.methods } }}
      >
        {this.props.children}
      </UsersContext.Provider>
    )
  }
}

const UsersContext = React.createContext()
export const UsersConsumer = UsersContext.Consumer
