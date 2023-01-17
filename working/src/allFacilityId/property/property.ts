//to select specific environment i.e. Dev / Thunderdome
export const environment = 'Thunderdome';
export const devUrl = 'https://dev.mm100.mastermindtms.com/?login-init=true';
//Specify no of users
export const noOfUsers = 5;

//select executor i.e. constant-vus / ramping-vus / constant-arrival-rate
//if executor is 'constant-vus'
export const executor = 'constant-arrival-rate';
//select duration for test run
export const duration = '1m';
//select what to gracefulRampDown 
export const gracefulRampDown = '30s'

//if executor is 'ramping-vus'
export const gracefulStop = '30s'
export const target1 = 1
export const target2 = 1
export const target3 = 1
export const duration1 = '2m'
export const duration2 = '2m'
export const duration3 = '2m'

//if executor is 'constant-arrival-rate'
export const rate = 1
export const timeUnit = '1s'
export const durationCAR = '1m'
export const preAllocatedVUs = 1
export const maxVUs = 1
