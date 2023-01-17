export function createUpdateStopsOnRouteVariable (routeId,facilityId){

  const createUpdateStopsOnRouteVariable = `
  {

    "useEmployeeV2": true,

    "useFacilityV2": true,

    "useCustomerLoadDefaults": false,

    "input": {

      "routeId": "`+routeId+`",

      "facilityId": "`+facilityId+`",

      "scheduleType": "appt",

      "liveType": "live",

      "workType": "noTouch",

      "type": "PU",

      "loadStopType": "Del",

      "loadFromId": null,

      "unloadFromId": "Tail Only",

      "requirements": [],

      "commodities": [],

      "refs": [],

      "availableStart": {

        "timezone": "America/Chicago",

        "value": "2022-12-07T06:00:00.000Z"

      },

      "availableEnd": {

        "timezone": "America/Chicago",

        "value": "2022-12-07T06:00:00.000Z"

      },

      "availableStartTimes": {

        "startOffsetMs": 0,

        "endOffsetMs": 0

      },

      "availableEndTimes": {

        "startOffsetMs": 0,

        "endOffsetMs": 0

      },

      "appointment": {

        "autoSchedule": false

      },

      "isCreatedManually": true

    }

  }`

return createUpdateStopsOnRouteVariable
}
