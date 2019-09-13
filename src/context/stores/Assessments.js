import React, { Component } from 'react'

const initialState = {
  assessmentStarted: 'No'
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
    startAssessment: () => {
      this.setStore('assessmentStarted', 'Yes')
    }
  }

  render() {
    return (
      <AssessmentsContext.Provider
        value={{ assessmentsStore: { ...this.state, ...this.methods } }}
      >
        {this.props.children}
      </AssessmentsContext.Provider>
    )
  }
}

const AssessmentsContext = React.createContext()
export const AssessmentsConsumer = AssessmentsContext.Consumer
