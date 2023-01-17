export const createUpdateStopsOnRouteQuery = `fragment AddressBrief on Address {
  __typename
  addressType {
    __typename
    ...KeyValueInfo
  }
  addressTypeId
  addressableId
  addressableType
  city
  country
  geopoint {
    __typename
    lat
    lon
  }
  id
  isVerified
  main
  postalCode
  riskInfoSource
  state
  street1
  street2
  thirdPartyId
}
fragment AppointmentV2ForCCAInfo on AppointmentV2 {
  __typename
  confirmed
  id
  requestedEnd {
    __typename
    timezone
    value
  }
  requestedStart {
    __typename
    timezone
    value
  }
  requestedTimeRange {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  status
}
fragment AppointmentV2Info on AppointmentV2 {
  __typename
  autoSchedule
  changedBy @skip(if: $useEmployeeV2) {
    __typename
    employeeDisplayName
    id
  }
  changedByV2 @include(if: $useEmployeeV2) {
    __typename
    employeeDisplayName
    id
  }
  confirmed
  createdAt
  id
  requestedEnd {
    __typename
    timezone
    value
  }
  requestedStart {
    __typename
    timezone
    value
  }
  requestedTimeRange {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  status
  updatedAt
}
fragment CommodityInfoV2 on CommodityV2 {
  __typename
  actualClass {
    __typename
    ...KeyValueInfo
  }
  actualDensity {
    __typename
    unit
    value
  }
  actualDensityV2 {
    __typename
    unit
    value
  }
  actualDimensions {
    __typename
    height(unit: in) {
      __typename
      unit
      value
    }
    length(unit: in) {
      __typename
      unit
      value
    }
    width(unit: in) {
      __typename
      unit
      value
    }
  }
  actualDimensionsV2 {
    __typename
    height {
      __typename
      unit
      value
    }
    length {
      __typename
      unit
      value
    }
    width {
      __typename
      unit
      value
    }
  }
  actualLinear(unit: ft) {
    __typename
    unit
    value
  }
  actualLinearV2 {
    __typename
    unit
    value
  }
  actualNMFCCode
  actualPieces
  actualVolume(unit: ft3) {
    __typename
    unit
    value
  }
  actualVolumeV2 {
    __typename
    unit
    value
  }
  actualWeight(unit: lbs) {
    __typename
    unit
    value
  }
  actualWeightV2 {
    __typename
    unit
    value
  }
  bottomLoadable
  customerCode
  description
  doNotStack
  expectedClass {
    __typename
    ...KeyValueInfo
  }
  expectedDensity {
    __typename
    unit
    value
  }
  expectedDensityV2 {
    __typename
    unit
    value
  }
  expectedDimensions {
    __typename
    height(unit: in) {
      __typename
      unit
      value
    }
    length(unit: in) {
      __typename
      unit
      value
    }
    width(unit: in) {
      __typename
      unit
      value
    }
  }
  expectedDimensionsV2 {
    __typename
    height {
      __typename
      unit
      value
    }
    length {
      __typename
      unit
      value
    }
    width {
      __typename
      unit
      value
    }
  }
  expectedLinear(unit: ft) {
    __typename
    unit
    value
  }
  expectedLinearV2 {
    __typename
    unit
    value
  }
  expectedNMFCCode
  expectedPieces
  expectedVolume(unit: ft3) {
    __typename
    unit
    value
  }
  expectedVolumeV2 {
    __typename
    unit
    value
  }
  expectedWeight(unit: lbs) {
    __typename
    unit
    value
  }
  expectedWeightV2 {
    __typename
    unit
    value
  }
  hazmat
  hazmatClass {
    __typename
    ...KeyValueInfo
  }
  hazmatPackagingGroup
  hazmatPhoneNumber
  hazmatUnitedNationsNumber
  id
  loadOnType {
    __typename
    ...KeyValueInfo
  }
  make
  maximumTemperature {
    __typename
    unit
    value
  }
  maximumTemperatureV2 {
    __typename
    unit
    value
  }
  minimumTemperature {
    __typename
    unit
    value
  }
  minimumTemperatureV2 {
    __typename
    unit
    value
  }
  model
  orderId
  overDimensional
  packagingCount
  packagingType {
    __typename
    ...KeyValueInfo
  }
  pieceType {
    __typename
    ...KeyValueInfo
  }
  preCoolTo {
    __typename
    unit
    value
  }
  preCoolToV2 {
    __typename
    unit
    value
  }
  serialNumbers
  shipments {
    __typename
    id
    name
  }
  stccCode
  temperatureControlled
  temperatureSetting
  topLoadable
  year
}
fragment ContactInfo on Contact {
  __typename
  chatType {
    __typename
    ...KeyValueInfo
  }
  chatTypeId
  chatUsername
  contactTypeId
  emailAddress
  extension
  faxNumber
  id
  main
  main
  name
  phoneNumber
  riskInfoSource
  thirdPartyId
}
fragment DatetimeWithTimezoneInfo on DatetimeWithTimezone {
  __typename
  timezone
  value
}
fragment FacilityAddressBrief on FacilityAddress {
  __typename
  addressType {
    __typename
    ...KeyValueInfo
  }
  addressTypeId
  addressTypes {
    __typename
    id
  }
  city
  country
  geopoint {
    __typename
    lat
    lon
  }
  id
  isVerified
  main
  postalCode
  riskInfoSource
  state
  street1
  street2
  thirdPartyId
}
fragment FacilityContactInfo on FacilityContact {
  __typename
  chatType {
    __typename
    ...KeyValueInfo
  }
  chatTypeId
  chatUsername
  contactTypeId
  emailAddress
  extension
  faxNumber
  id
  main
  main
  name
  phoneNumber
  riskInfoSource
  thirdPartyId
}
fragment FacilityNoteInfo on FacilityNote {
  __typename
  createdAt
  id
  noteType
  noteableId
  noteableType
  text
  updatedAt
}
fragment FreightAssignmentRegionInfo on FreightAssignmentRegion {
  __typename
  region
  subRegion
  superRegion
}
fragment KeyValueInfo on KeyValue {
  __typename
  active
  id
  metadataJson
  name
}
fragment LoadRouteStopFacilityInfo on Facility {
  __typename
  addresses {
    __typename
    ...AddressBrief
  }
  code
  contacts {
    __typename
    ...ContactInfo
  }
  customerFacilities @include(if: $useCustomerLoadDefaults) {
    __typename
    customerId
    drop
    facilityId
    id
    isAutoScheduleDefault
    isAutoScheduleEligible
    schedulingSystem
  }
  externalNotes {
    __typename
    ...NoteInfo
  }
  facilityLoadDefaults @include(if: $useCustomerLoadDefaults) {
    __typename
    autoSchedDefault
    autoSchedEligible
    facilityId
    id
    schedSystem
  }
  facilityNote
  id
  loadFromType {
    __typename
    ...KeyValueInfo
  }
  mainAddress {
    __typename
    ...AddressBrief
  }
  name
  phoneNumber
  schedules {
    __typename
    ...ScheduleInfo
  }
  schedulingContact
  schedulingSystemType {
    __typename
    ...KeyValueInfo
  }
  status
  timezone
  unloadFromType {
    __typename
    ...KeyValueInfo
  }
}
fragment LoadRouteStopFacilityInfoV2 on FacilityV2 {
  __typename
  addresses {
    __typename
    ...FacilityAddressBrief
  }
  code
  contacts {
    __typename
    ...FacilityContactInfo
  }
  customerFacilities @include(if: $useCustomerLoadDefaults) {
    __typename
    customerId
    drop
    facilityId
    id
    isAutoScheduleDefault
    isAutoScheduleEligible
    schedulingSystem
  }
  externalNotes {
    __typename
    ...FacilityNoteInfo
  }
  facilityLoadDefaults @include(if: $useCustomerLoadDefaults) {
    __typename
    autoSchedDefault
    autoSchedEligible
    facilityId
    id
    schedSystem
  }
  facilityNote
  id
  loadFromType {
    __typename
    ...KeyValueInfo
  }
  mainAddress {
    __typename
    ...FacilityAddressBrief
  }
  name
  phoneNumber
  schedules {
    __typename
    ...ScheduleInfoV2
  }
  schedulingContact
  schedulingSystemType {
    __typename
    ...KeyValueInfo
  }
  status
  timezone
  unloadFromType {
    __typename
    ...KeyValueInfo
  }
}
fragment LoadRouteStopInfo on RouteStop {
  __typename
  address {
    __typename
    ...StopAddressInfo
  }
  appointment {
    __typename
    ...AppointmentV2Info
  }
  appointments {
    __typename
    ...AppointmentV2Info
  }
  apptConfBy
  apptReqWith
  availableEnd {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  availableEndTimes {
    __typename
    ...StopRange
  }
  availableStart {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  availableStartTimes {
    __typename
    ...StopRange
  }
  bolNumber
  commodities {
    __typename
    ...CommodityInfoV2
  }
  computedCurrentAppointment {
    __typename
    ...AppointmentV2ForCCAInfo
  }
  distanceToNext(unit: mi) {
    __typename
    unit
    value
  }
  facility @skip(if: $useFacilityV2) {
    __typename
    ...LoadRouteStopFacilityInfo
  }
  facilityV2 @include(if: $useFacilityV2) {
    __typename
    ...LoadRouteStopFacilityInfoV2
  }
  freightAssignmentRegion {
    __typename
    ...FreightAssignmentRegionInfo
  }
  id
  isOrderStop
  liveType
  loadFrom {
    __typename
    ...KeyValueInfo
  }
  loadStopType
  note
  numberOfPallets
  orderStopId
  refs {
    __typename
    id
    type {
      __typename
      ...KeyValueInfo
    }
    value
  }
  reqDate {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  requirements {
    __typename
    option {
      __typename
      ...KeyValueInfo
    }
  }
  scheduleType
  schedulingLog {
    __typename
    ...SchedulingLogInfo
  }
  sealNumber
  stopEventsV2 {
    __typename
    eventSubTypeDatetime
    eventSubTypeID
    eventSubTypeTimezone
    eventTypeID
    id
  }
  trackingAutoETADatetime
  trackingAutoETAUsesDataScienceFormula
  trackingManualETADatetime
  type
  unloadFrom {
    __typename
    ...KeyValueInfo
  }
  workType
}
fragment NoteInfo on Note {
  __typename
  createdAt
  id
  noteType
  noteableId
  noteableType
  text
  updatedAt
}
fragment ScheduleEntryInfo on ScheduleEntry {
  __typename
  closed
  hours {
    __typename
    ...ScheduleRangeInfo
  }
  id
}
fragment ScheduleEntryInfoV2 on ScheduleEntryV2 {
  __typename
  closed
  hours {
    __typename
    ...ScheduleRangeInfoV2
  }
  id
}
fragment ScheduleInfo on Schedule {
  __typename
  appointmentType
  dropType
  friday {
    __typename
    ...ScheduleEntryInfo
  }
  id
  loadSize {
    __typename
    ...KeyValueInfo
  }
  loadSizeId
  modeType
  monday {
    __typename
    ...ScheduleEntryInfo
  }
  routeTransportMode {
    __typename
    ...KeyValueInfo
  }
  routeTransportModeId
  saturday {
    __typename
    ...ScheduleEntryInfo
  }
  scheduleTypeNullable
  serviceType
  sunday {
    __typename
    ...ScheduleEntryInfo
  }
  thursday {
    __typename
    ...ScheduleEntryInfo
  }
  trailerTypeIdNullable
  trailerTypeNullable {
    __typename
    ...KeyValueInfo
  }
  tuesday {
    __typename
    ...ScheduleEntryInfo
  }
  wednesday {
    __typename
    ...ScheduleEntryInfo
  }
  workType
}
fragment ScheduleInfoV2 on ScheduleV2 {
  __typename
  appointmentType
  dropType
  friday {
    __typename
    ...ScheduleEntryInfoV2
  }
  id
  loadSize {
    __typename
    ...KeyValueInfo
  }
  loadSizeId
  modeType
  monday {
    __typename
    ...ScheduleEntryInfoV2
  }
  routeTransportMode {
    __typename
    ...KeyValueInfo
  }
  routeTransportModeId
  saturday {
    __typename
    ...ScheduleEntryInfoV2
  }
  scheduleType
  scheduleTypeNullable
  serviceType
  serviceType
  sunday {
    __typename
    ...ScheduleEntryInfoV2
  }
  thursday {
    __typename
    ...ScheduleEntryInfoV2
  }
  trailerType {
    __typename
    ...KeyValueInfo
  }
  trailerTypeId
  trailerTypeIdNullable
  trailerTypeNullable {
    __typename
    ...KeyValueInfo
  }
  tuesday {
    __typename
    ...ScheduleEntryInfoV2
  }
  wednesday {
    __typename
    ...ScheduleEntryInfoV2
  }
  workType
}
fragment ScheduleRangeInfo on ScheduleRange {
  __typename
  endOffsetMs
  id
  startOffsetMs
}
fragment ScheduleRangeInfoV2 on ScheduleRangeV2 {
  __typename
  endOffsetMs
  id
  startOffsetMs
}
fragment SchedulingLogInfo on SchedulingLog {
  __typename
  category
  changedBy @skip(if: $useEmployeeV2) {
    __typename
    employeeDisplayName
    id
  }
  changedByV2 @include(if: $useEmployeeV2) {
    __typename
    employeeDisplayName
    id
  }
  createdAt
  endDate {
    __typename
    timezone
    value
  }
  id
  reason
  scheduleReason
  startDate {
    __typename
    timezone
    value
  }
  timeRange {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  type
}
fragment StopAddressInfo on StopAddress {
  __typename
  city
  country
  geopoint {
    __typename
    lat
    lon
  }
  id
  postalCode
  state
  street1
  street2
}
fragment StopRange on ScheduleRange {
  __typename
  endOffsetMs
  id
  startOffsetMs
}
mutation createOrUpdateStopV2($input: LoadStopInput!, $useCustomerLoadDefaults: Boolean! = false, $useEmployeeV2: Boolean! = false, $useFacilityV2: Boolean! = false) {
  createOrUpdateStopV2(loadStopInput: $input) {
    __typename
    errors {
      __typename
      message
      path
    }
    routeStop {
      __typename
      ...LoadRouteStopInfo
    }
  }
}`