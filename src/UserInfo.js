import React, { Fragment } from 'react'
import inject from './context/inject'
import { compose } from 'recompose'

const Page = ({
  usersStore: { setJoshProfile, reset: resetUsers, name, email, nicknames },
  assessmentsStore: {
    assessmentStarted,
    startAssessment,
    reset: resetAssessments
  }
}) => (
  <Fragment>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start'
      }}
    >
      <div style={{ width: '100%', textAlign: 'left' }}>Name: {name}</div>
      <div style={{ width: '100%', textAlign: 'left' }}>Email: {email}</div>
      <div style={{ width: '100%', textAlign: 'left' }}>
        Assessment Started: {assessmentStarted}
      </div>
      <div style={{ width: '100%', textAlign: 'left' }}>
        <ul>
          {nicknames.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start'
      }}
    >
      <button onClick={() => setJoshProfile()}>Set User Profile</button>
      <button onClick={() => resetUsers()}>Reset User</button>
      <button onClick={() => startAssessment()}>Start Assessment</button>
      <button onClick={() => resetAssessments()}>Reset Assessment</button>
    </div>
  </Fragment>
)

export default compose(
  inject('users'),
  inject('assessments')
)(Page)
