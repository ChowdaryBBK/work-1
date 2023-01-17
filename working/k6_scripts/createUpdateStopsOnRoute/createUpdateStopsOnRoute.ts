import {createUpdateStopsOnRouteQuery} from '../../src/createUpdateStopsOnRoute/graphql/queries.ts'
import {createUpdateStopsOnRouteVariable} from '../../src/createUpdateStopsOnRoute/graphql/variables.ts'
import {getHeader} from '../../src/createUpdateStopsOnRoute/graphql/headers.ts'
import {executeAfter} from '../../utils/generatefunction.ts'
import {rate,timeUnit,durationCAR,preAllocatedVUs,maxVUs,executor} from '../../src/createUpdateStopsOnRoute/property/property.ts'
import {environmentSelector} from '../../src/createUpdateStopsOnRoute/property/environmentSelector.ts'
import {createload} from '../createLoad/createLoadApi.ts'
import {allFacilityId} from'../allFacilityId/allFacilityId.ts'

import { check } from 'k6'
import http from 'k6/http'
// import counter
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
      exec: 'createUpdateStopsOnRoute'
    }
  }
}
export function createUpdateStopsOnRoute() {
  token = executeAfter(15)
  let res = createload();

  let routeId = res.data.createLoadV2.load.routes[0].id

  //console.log(response.data.createLoadV2.load.orders[0].id)

   let re = allFacilityId();

  //  let facilityId = re.data.allFacilitiesV2.edges[0].node.id

   //console.log(facilityId)

  let lengthId = re.data.allFacilitiesV2.edges.length

  //console.log(lengthId)

  var facilityId=re.data.allFacilitiesV2.edges[Math.floor(Math.random() * lengthId)].node.id;

  //console.log(facilityId)


  const response = http.post(
    environmentSelector(),
    JSON.stringify({query: createUpdateStopsOnRouteQuery, variables: createUpdateStopsOnRouteVariable(routeId,facilityId)}),
    {headers: getHeader(token)}
  )
  // console.log(JSON.parse (response.body))
   check(response, {
    'is status 200': r => r.status === 200
  })
  //console.log(res.body)
  check(response, {
    'is responsce generated for createUpdateStopOnRoute': r =>
      JSON.parse(r.body).data.createOrUpdateStopV2.routeStop.orderStopId.length >0
  })
  return JSON.parse(response.body)
  
  //createLoadCounter.add(1)
}

