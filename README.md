#Redux Basics Sample project
###Sample Project to demonstrate Redux with multiple reducers. 

##NOTES

The aim of Redux is to enable the usage of state globally for every components.

In React, data flow from one components to another is done from parent component to child component.
If two different components in the same level of hierarchy needs the same data (state), then we need to manage the data 
in a higher level of component (in general practice..)

Thanks to redux, we have a global management of state and all components able to read and update the state globally.

Even the boiler plate code (setup) code of Redux is a lot, i still think its a good approach to solve the problem with a
good architectural pattern. (a simple observable/pub-sub implementation, in Observable pattern there is a subject 
and there are a number of Observes watching the subject and change the state accordingly)

here for wiki [https://en.wikipedia.org/wiki/Observer_pattern]

##There are four important elements fo redux:


### Store
`Store is the global state`

### Actions
`Actions are type definitions and payloads of events, those will be used in upating the store (hence state)`

### Reducers
`This is the place where we are updating the state. In general, for each action we need a different reducers to operate.`

### Dispatch
`Dispatch is the function that is used to trigger an action`

 