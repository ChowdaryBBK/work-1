import {generateToken} from './LoginToken.js'

let refreshed = 0

let token = ''

export function executeAfter(time) {

  const diff = new Date() - refreshed

  if (diff > 1000 * 60 * time) {

    token = generateToken()

    //console.log('after each 5 sec' + new Date())

    refreshed = new Date()

  }

  return token

}

