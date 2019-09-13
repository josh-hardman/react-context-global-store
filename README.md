# React Context Replacement For MobX

## Providers

import { UsersProvider, AssessmentsProvider } from './context/providers'

```
<div className='App'>
  <UsersProvider>
    <AssessmentsProvider>
      <Page />
    </AssessmentsProvider>
  </UsersProvider>
</div>
```

Any component nested under a provider can hook up to it.

## Consumers

You can inject the contexts by using the following syntax. If this syntax is unfamiliar, inject is an HOC. It allows us to basically wrap our Page component and inject props provided from the users and assessments context.

```
export default compose(
  inject('users'),
  inject('assessments')
)(Page)
```

compose is a helper library that allows us to write this in a way that is easier to read. A typical HOC looks like this:

`withHoc(Page)`

When you have multiple Hocs, things get a little ugly. Especially if we had a lot of hocs:

`withHoc1(withHoc2(withHoc3((Page)))`

Compose allows us to write it like this:

`compose(withHoc1, withHoc2, withHoc3)(Page)`

After injecting the context providers, we can now access store values, and methods from our stores via props:

`const {name, email, setName, setEmail} = this.props.usersStore`

## Stores

The term "store" isn't used in react context, but makes sense in our implementation and is a term borrowed from other libraries like Redux and MobX. In our case a store is a file that exports the react context provider and consumer. The store is where we define the values that a store holds, as well as some methods that can manipulate those values. At it's core, the store is a simple class based react component.

initialState is used as a starting point for all of the values the store is responsible for. New values should always be defined here first. keeping initialState as a separate variable allows us to reset the store if we need to. This is helpful if a user logs out and we want to clear all the users values.

```
const initialState = {
  name: 'Joe Smith',
  email: '',
  nicknames: []
}

export default class Provider extends Component {
  state = initialState
```

The methods property is home to any methods we would like to make available when the store is injected into a component.

```
  methods = {
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
```

At the end of each store file you will find
`Context = React.createContext()`

This is where we get the provider and consumer to export.

The store renders a Provider and passes our store values and methods. The provider is the default export.

```
render() {
    return (
      <UsersContext.Provider
        value={{ usersStore: { ...this.state, ...this.methods } }}
      >
        {this.props.children}
      </UsersContext.Provider>
    )
  }
```

The consumer is exported as a named export

`export const UsersConsumer = UsersContext.Consumer`
