import { environment } from '../src/createLoad/property/property.ts'
import http from 'k6/http';
//Function to genarte token
let token = ''

// export class login{
// body : {
// access_token:string
// }}

export function generateToken() {
  if (environment == 'Thunderdome') {
    /*
    const response = http.post('https://id.mm100nonprod.mastermindtms.com/auth/realms/dev.mm100.mastermindtms.com/protocol/openid-connect/token',
    {
      grant_type: 'client_credentials',
      client_id: 'dev.mm100.mastermindtms.com-thundercats',
      client_secret: '3778684a-4521-416c-9792-b33ab9c228c9'
      */

    const response = http.post('https://id.td100nonprod.mastermindtms.com/auth/realms/test.td100.mastermindtms.com/protocol/openid-connect/token',
      {
        grant_type: 'client_credentials',
        client_id: 'test.td100.mastermindtms.com-search-facility-api',
        client_secret: '16c632cf-408c-4454-a102-24f3dccbb614'
      }
    )
    //console.log("**************************************************",response.body)
    const loginResponse = JSON.parse(response.body);
    token = loginResponse.access_token

  } else {
    console.log("Invalid environemnet details")
  }
  //console.log('token......................................' + token)
  return token;
}


