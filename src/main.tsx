import React from 'react'
import ReactDOM from 'react-dom'
import createAuth0Client from '@auth0/auth0-spa-js'

import {App} from './modules/App'

const main = async () => {
  const auth0Client = await createAuth0Client({
    domain: '',
    client_id: '',
  })
  console.log(auth0Client)
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}

main()
