import React from 'react'
import {auth0} from '../auth0'

export const App = () => {
  React.useEffect(() => {
    auth0
      .handleRedirectCallback()
      .then(() => auth0.getUser())
      .then((user) => {
        console.log({user})
      })
  })

  return <button onClick={() => auth0.loginWithRedirect()}>click me</button>
}
