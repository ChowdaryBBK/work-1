import {environment} from './property.ts'



export function environmentSelector() {

  let URL

  switch (environment) {

    case 'Dev': {

      URL = 'https://graphql.dev.mm100.mastermindtms.com/graphql'

      break

    }

    case 'Thunderdome': {

      URL = 'https://graphql.test.td100.mastermindtms.com/graphql'

      break

    }

  }

  return URL

}

