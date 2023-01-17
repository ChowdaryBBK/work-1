// @ts-ignore
import { createLoadQuery } from '../../src/createLoad/graphql/queries.ts'
// @ts-ignore
import { createLoadVariable } from '../../src/createLoad/graphql/variables.ts'
import { getHeader } from '../../src/createLoad/graphql/headers.ts'

import { executeAfter } from '../../utils/generatefunction.ts'

import { rate,timeUnit,durationCAR,preAllocatedVUs,maxVUs,executor } from '../../src/createLoad/property/property.ts'
import { environmentSelector } from '../../src/createLoad/property/environmentSelector.ts'

import { check } from 'k6'
import http from 'k6/http'
//const rateError = new Rate("errors")

//import counter
//import { Counter } from 'k6/metrics'
//const createLoadCounter = new Counter('createLoadCounter')

let token = ''
export const options = {
  //discardResponseBodies: true,
  scenarios: {
    constant_request_rate: {
      executor: executor,
      rate: rate,
      timeUnit: timeUnit,
      duration: durationCAR,
      preAllocatedVUs: preAllocatedVUs,
      maxVUs: maxVUs,
      exec: 'createload'
    }
  }
}
export function createload() {
  token = executeAfter(15)
  const response = http.post(
    environmentSelector(),
    JSON.stringify({query: createLoadQuery, variables: createLoadVariable}),
    {headers: getHeader(token)}
  )
  // console.log(JSON.parse (response.body))
   check(response, {
    'is status 200': r => r.status === 200
  })
  //console.log(response.body)
  check(response, {
    'is responsce generated for createLoad': r =>
      JSON.parse(r.body).data.createLoadV2.load.code.length === 10
  })
  return JSON.parse(response.body)
  
}
