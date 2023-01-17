import {getHeader} from '../../src/allFacilityId/graphql/headers.ts'
import {allFacilityIdQuery} from '../../src/allFacilityId/graphql/queries.ts'
import {rate,timeUnit,durationCAR,preAllocatedVUs,maxVUs,executor} from '../../src/allFacilityId/property/property.ts'
import{executeAfter} from '../../utils/generatefunction.ts'
import{environmentSelector} from '../../src/allFacilityId/property/environmentSelector.ts'

import { check } from 'k6'
import http from 'k6/http'

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
      exec: 'allFacilityId'
    }
  }
}
export function allFacilityId() {
  token = executeAfter(15)
  const response = http.post(
    environmentSelector(),
    JSON.stringify({query: allFacilityIdQuery}),
    {headers: getHeader(token)}
  )
  //console.log(JSON.parse (response.body))
   check(response, {
    'is status 200': r => r.status === 200
  })
//  console.log(response.body)

  check(response, {
    'is responsce generated for allFacilityId': r =>
      JSON.parse(r.body).data.allFacilitiesV2.edges[0].node.id.length >0
  })
  return JSON.parse(response.body)
}


