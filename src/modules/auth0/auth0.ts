import {Auth0Client} from '@auth0/auth0-spa-js'

import {assertIsString} from '../assertIsString/assertIsString'

assertIsString(
  import.meta.env.VITE_AUTH0_DOMAIN,
  'Missing envvar VITE_AUTH0_DOMAIN',
)
assertIsString(
  import.meta.env.VITE_AUTH0_CLIENT_ID,
  'Missing envvar VITE_AUTH0_CLIENT_ID',
)
assertIsString(
  import.meta.env.VITE_AUTH0_REDIRECT_URI,
  'Missing envvar VITE_AUTH0_REDIRECT_URI',
)

export const auth0 = new Auth0Client({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
})
