export const createLoadQuery = `mutation createLoadV2($input: LoadInputV2!, $useCustomerV2: Boolean! = false, $useEmployeeV2: Boolean! = false, $useFacilityV2: Boolean! = false, $useCarrierV2: Boolean! = false, $useCityStateStop: Boolean! = false, $useCustomerLoadDefaults: Boolean! = false) {
  createLoadV2(loadInput: $input) {
    errors {
      message
      path
      __typename
    }
    load {
      ...NewLoadInfoV2
      __typename
    }
    __typename
  }
}

fragment NewLoadInfoV2 on LoadV2 {
  code
  id
  orders {
    ...CustomerOrderInfoV2
    __typename
  }
  routes {
    ...LoadRouteInfoV2
    __typename
  }
  stops {
    ...LoadStopInfo
    __typename
  }
  status
  note
  createdAt
  __typename
}

fragment CustomerOrderInfoV2 on CustomerOrderV2 {
  id
  code
  invoiceNote
  orderNote
  lifeCycleStatus
  acceptedBy @skip(if: $useEmployeeV2) {
    ...EmployeeSimple
    __typename
  }
  acceptedByV2 @include(if: $useEmployeeV2) {
    ...EmployeeSimpleV2
    __typename
  }
  declinedBy @skip(if: $useEmployeeV2) {
    ...EmployeeSimple
    __typename
  }
  declinedByV2 @include(if: $useEmployeeV2) {
    ...EmployeeSimpleV2
    __typename
  }
  declinedReason {
    ...KeyValueInfo
    __typename
  }
  stops {
    facility @skip(if: $useFacilityV2) {
      ...LoadOrderStopFacilityInfo
      __typename
    }
    facilityV2 @include(if: $useFacilityV2) {
      ...LoadOrderStopFacilityInfoV2
      __typename
    }
    id
    loadStopType
    __typename
  }
  orderedBy @skip(if: $useCustomerV2) {
    id
    name
    contactTypeId
    __typename
  }
  orderedByV2 @include(if: $useCustomerV2) {
    id
    name
    contactTypeId
    __typename
  }
  customer @skip(if: $useCustomerV2) {
    ...LoadOrderCustomerInfo
    __typename
  }
  customerV2 @include(if: $useCustomerV2) {
    ...LoadOrderCustomerInfoV2
    __typename
  }
  activationStatus {
    ...KeyValueInfo
    __typename
  }
  activationStatusReason
  transportMode {
    ...KeyValueInfo
    __typename
  }
  size {
    ...KeyValueInfo
    __typename
  }
  trailerTypes {
    ...KeyValueInfo
    __typename
  }
  totalDistance(unit: mi) {
    unit
    value
    __typename
  }
  relation {
    ...KeyValueInfo
    __typename
  }
  priceTier {
    ...KeyValueInfo
    __typename
  }
  quoteType {
    ...KeyValueInfo
    __typename
  }
  tenderStatus {
    ...KeyValueInfo
    __typename
  }
  dimensions {
    ...CustomerOrderDimensionsInfo
    __typename
  }
  commodities {
    ...CommodityInfoV2
    __typename
  }
  refs {
    type {
      ...KeyValueInfo
      __typename
    }
    value
    id
    __typename
  }
  reps @skip(if: $useEmployeeV2) {
    ...CustomerOrderRepInfo
    __typename
  }
  repsV2 @include(if: $useEmployeeV2) {
    ...CustomerOrderRepInfoV2
    __typename
  }
  requirements {
    option {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  division
  segmentCode
  project
  numberOfPallets
  billToCustomer @skip(if: $useCustomerV2) {
    id
    name
    code
    __typename
  }
  billToCustomerV2 @include(if: $useCustomerV2) {
    id
    name
    code
    __typename
  }
  tenderFrom @skip(if: $useCustomerV2) {
    id
    code
    name
    __typename
  }
  tenderFromV2 @include(if: $useCustomerV2) {
    id
    code
    name
    __typename
  }
  load {
    id
    __typename
  }
  serviceLevel {
    id
    description
    name
    __typename
  }
  divisionV2
  businessUnit
  projectV2
  accountingOrder {
    ...AccountingOrderInfo
    __typename
  }
  paymentTerms {
    ...KeyValueInfo
    __typename
  }
  tarpType
  tarpCount
  braceTypes {
    option {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  braceCount
  shipments {
    name
    id
    commodities {
      id
      description
      expectedWeightV2 {
        unit
        value
        __typename
      }
      __typename
    }
    __typename
  }
  cargoInsuranceV2 {
    ...CurrencyInfoV2
    __typename
  }
  __typename
}

fragment EmployeeSimple on Employee {
  companyEmail
  email
  emergencyContact
  emergencyPhone
  employeeDepartmentId
  employeeDisplayName
  employeeGenderId
  employeeGroupId
  employeeId
  employeeOfficeId
  employeeSuffixId
  ext
  firstName
  fullName
  id
  lastName
  middleName
  nickname
  personalEmail
  phoneNumber
  relationship
  title
  userId
  managerId
  __typename
}

fragment EmployeeSimpleV2 on EmployeeV2 {
  companyEmail
  email
  emergencyContact
  emergencyPhone
  employeeDepartmentId
  employeeDisplayName
  employeeGenderId
  employeeGroupId
  employeeId
  employeeOfficeId
  employeeSuffixId
  ext
  firstName
  fullName
  id
  lastName
  middleName
  nickname
  personalEmail
  phoneNumber
  relationship
  title
  userId
  managerId
  __typename
}

fragment KeyValueInfo on KeyValue {
  active
  id
  metadataJson
  name
  __typename
}

fragment LoadOrderStopFacilityInfo on Facility {
  id
  code
  name
  mainAddress {
    ...AddressBrief
    __typename
  }
  __typename
}

fragment AddressBrief on Address {
  id
  addressableId
  addressableType
  addressType {
    ...KeyValueInfo
    __typename
  }
  addressTypeId
  city
  country
  main
  postalCode
  state
  street1
  street2
  geopoint {
    lon
    lat
    __typename
  }
  isVerified
  riskInfoSource
  thirdPartyId
  __typename
}

fragment LoadOrderStopFacilityInfoV2 on FacilityV2 {
  id
  code
  name
  mainAddress {
    ...FacilityAddressBrief
    __typename
  }
  __typename
}

fragment FacilityAddressBrief on FacilityAddress {
  id
  addressType {
    ...KeyValueInfo
    __typename
  }
  addressTypes {
    id
    __typename
  }
  addressTypeId
  city
  country
  main
  postalCode
  state
  street1
  street2
  geopoint {
    lon
    lat
    __typename
  }
  riskInfoSource
  thirdPartyId
  isVerified
  __typename
}

fragment LoadOrderCustomerInfo on Customer {
  id
  code
  name
  insuranceCargo
  electronicTracking
  accountsReceivableOverdue
  creditStatus
  availableCredit
  useParentCredit
  invoiceDistributionMethodId
  billingEmail
  currencyId
  noteDefaults {
    rateConfirmNote
    __typename
  }
  loadDefaults {
    doNotPostLoads
    disableAutoPost
    __typename
  }
  addresses {
    ...AddressBrief
    __typename
  }
  billingAddress {
    id
    __typename
  }
  customerStatusType {
    ...KeyValueInfo
    __typename
  }
  accountingNotes {
    id
    noteType
    text
    __typename
  }
  contacts {
    id
    name
    contactTypeId
    __typename
  }
  parent {
    id
    code
    name
    creditStatus
    __typename
  }
  reps {
    id
    main
    isLoadRep
    employee {
      ...EmployeeWithNameInfo
      employeeGroup {
        ...KeyValueInfo
        __typename
      }
      employeeOffice {
        ...KeyValueInfo
        __typename
      }
      __typename
    }
    repType {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  settings {
    ...CustomerSettingInfo
    __typename
  }
  __typename
}

fragment EmployeeWithNameInfo on Employee {
  id
  firstName
  lastName
  userId
  fullName
  __typename
}

fragment CustomerSettingInfo on CustomerSetting {
  id
  defaultTrailerLength {
    asRoundedFeet
    __typename
  }
  trailerTypes {
    ...KeyValueInfo
    __typename
  }
  doNotPostLoads
  __typename
}

fragment LoadOrderCustomerInfoV2 on CustomerV2 {
  id
  code
  name
  insuranceCargo
  electronicTracking
  accountsReceivableOverdue
  creditStatus
  availableCredit
  useParentCredit
  invoiceDistributionMethodId
  billingEmail
  currencyId
  noteDefaults {
    rateConfirmNote
    __typename
  }
  loadDefaults {
    doNotPostLoads
    disableAutoPost
    __typename
  }
  addresses {
    ...CustomerAddressBriefV2
    __typename
  }
  billingAddress {
    id
    __typename
  }
  customerStatusType {
    ...KeyValueInfo
    __typename
  }
  accountingNotes {
    id
    noteType
    text
    __typename
  }
  contacts {
    id
    name
    contactTypeId
    __typename
  }
  parent {
    id
    code
    name
    creditStatus
    __typename
  }
  reps {
    id
    main
    isLoadRep
    employee {
      ...EmployeeWithNameInfoV2
      employeeGroup {
        ...KeyValueInfo
        __typename
      }
      employeeOffice {
        ...KeyValueInfo
        __typename
      }
      __typename
    }
    repType {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  settings {
    ...CustomerSettingInfoV2
    __typename
  }
  __typename
}

fragment CustomerAddressBriefV2 on CustomerAddress {
  id
  addressableId
  addressableType
  addressType {
    ...KeyValueInfo
    __typename
  }
  addressTypeId
  city
  country
  main
  postalCode
  state
  street1
  street2
  geopoint {
    lon
    lat
    __typename
  }
  isVerified
  riskInfoSource
  thirdPartyId
  __typename
}

fragment EmployeeWithNameInfoV2 on EmployeeV2 {
  id
  firstName
  lastName
  userId
  __typename
}

fragment CustomerSettingInfoV2 on CustomerSettingV2 {
  id
  defaultTrailerLength {
    asRoundedFeet
    __typename
  }
  trailerTypes {
    ...KeyValueInfo
    __typename
  }
  doNotPostLoads
  __typename
}

fragment CustomerOrderDimensionsInfo on CustomerOrderDimensions {
  length(unit: ft) {
    unit
    value
    __typename
  }
  height(unit: in) {
    unit
    value
    __typename
  }
  width(unit: in) {
    unit
    value
    __typename
  }
  __typename
}

fragment CommodityInfoV2 on CommodityV2 {
  id
  orderId
  description
  actualClass {
    ...KeyValueInfo
    __typename
  }
  actualVolume(unit: ft3) {
    unit
    value
    __typename
  }
  actualVolumeV2 {
    unit
    value
    __typename
  }
  actualDensity {
    unit
    value
    __typename
  }
  actualDensityV2 {
    unit
    value
    __typename
  }
  actualDimensions {
    height(unit: in) {
      unit
      value
      __typename
    }
    length(unit: in) {
      unit
      value
      __typename
    }
    width(unit: in) {
      unit
      value
      __typename
    }
    __typename
  }
  actualDimensionsV2 {
    height {
      unit
      value
      __typename
    }
    length {
      unit
      value
      __typename
    }
    width {
      unit
      value
      __typename
    }
    __typename
  }
  actualLinear(unit: ft) {
    unit
    value
    __typename
  }
  actualLinearV2 {
    unit
    value
    __typename
  }
  actualNMFCCode
  actualPieces
  actualWeight(unit: lbs) {
    unit
    value
    __typename
  }
  actualWeightV2 {
    unit
    value
    __typename
  }
  bottomLoadable
  customerCode
  expectedClass {
    ...KeyValueInfo
    __typename
  }
  expectedVolume(unit: ft3) {
    unit
    value
    __typename
  }
  expectedVolumeV2 {
    unit
    value
    __typename
  }
  expectedDensity {
    unit
    value
    __typename
  }
  expectedDensityV2 {
    unit
    value
    __typename
  }
  expectedDimensions {
    height(unit: in) {
      unit
      value
      __typename
    }
    length(unit: in) {
      unit
      value
      __typename
    }
    width(unit: in) {
      unit
      value
      __typename
    }
    __typename
  }
  expectedDimensionsV2 {
    height {
      unit
      value
      __typename
    }
    length {
      unit
      value
      __typename
    }
    width {
      unit
      value
      __typename
    }
    __typename
  }
  expectedLinear(unit: ft) {
    unit
    value
    __typename
  }
  expectedLinearV2 {
    unit
    value
    __typename
  }
  expectedNMFCCode
  expectedPieces
  expectedWeight(unit: lbs) {
    unit
    value
    __typename
  }
  expectedWeightV2 {
    unit
    value
    __typename
  }
  hazmat
  hazmatClass {
    ...KeyValueInfo
    __typename
  }
  hazmatPackagingGroup
  hazmatPhoneNumber
  hazmatUnitedNationsNumber
  loadOnType {
    ...KeyValueInfo
    __typename
  }
  maximumTemperature {
    unit
    value
    __typename
  }
  maximumTemperatureV2 {
    unit
    value
    __typename
  }
  minimumTemperature {
    unit
    value
    __typename
  }
  minimumTemperatureV2 {
    unit
    value
    __typename
  }
  packagingCount
  packagingType {
    ...KeyValueInfo
    __typename
  }
  preCoolTo {
    unit
    value
    __typename
  }
  preCoolToV2 {
    unit
    value
    __typename
  }
  stccCode
  temperatureControlled
  temperatureSetting
  topLoadable
  overDimensional
  make
  model
  year
  serialNumbers
  doNotStack
  pieceType {
    ...KeyValueInfo
    __typename
  }
  shipments {
    name
    id
    __typename
  }
  __typename
}

fragment CustomerOrderRepInfo on CustomerOrderRep {
  id
  main
  fullName
  type {
    ...KeyValueInfo
    __typename
  }
  employeeGroup {
    ...KeyValueInfo
    __typename
  }
  employee {
    ...EmployeeWithNameInfo
    __typename
  }
  employeeId
  employeeOffice {
    ...KeyValueInfo
    __typename
  }
  __typename
}

fragment CustomerOrderRepInfoV2 on CustomerOrderRepV2 {
  id
  main
  fullName
  type {
    ...KeyValueInfo
    __typename
  }
  employeeGroup {
    ...KeyValueInfo
    __typename
  }
  employeeV2 {
    ...EmployeeWithNameInfoV2
    __typename
  }
  employeeId
  employeeOffice {
    ...KeyValueInfo
    __typename
  }
  __typename
}

fragment AccountingOrderInfo on Order {
  id
  isInvoiceRequirementBypassed
  taxExempt
  __typename
}

fragment CurrencyInfoV2 on LoadCurrency {
  unit
  value
  __typename
}

fragment LoadRouteInfoV2 on LoadRouteV2 {
  ...LoadRouteSlimRouteV2
  currentStop {
    ...RouteStopForStopEventsGrid
    __typename
  }
  nextStop {
    ...RouteStopForStopEventsGrid
    __typename
  }
  stops {
    ...LoadRouteStopInfo
    __typename
  }
  stopsV2 @include(if: $useCityStateStop) {
    ...LoadRouteStopInfoV2
    __typename
  }
  firstStop {
    id
    address {
      id
      city
      state
      __typename
    }
    availableStart {
      value
      timezone
      __typename
    }
    availableEnd {
      value
      timezone
      __typename
    }
    subRegion {
      name
      urn
      __typename
    }
    __typename
  }
  lastStop {
    id
    address {
      id
      city
      state
      __typename
    }
    availableStart {
      value
      timezone
      __typename
    }
    availableEnd {
      value
      timezone
      __typename
    }
    subRegion {
      name
      urn
      __typename
    }
    __typename
  }
  __typename
}

fragment LoadRouteSlimRouteV2 on LoadRouteV2 {
  id
  totalDistance(unit: mi) {
    unit
    value
    __typename
  }
  lifeCycleStatus
  sequence
  activationStatus {
    ...KeyValueInfo
    __typename
  }
  activationStatusReason
  expectedMaxWeight(unit: lbs) {
    unit
    value
    __typename
  }
  requirements {
    option {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  dimensions {
    ...RouteDimensionsInfo
    __typename
  }
  inboundRegion {
    ...RegionInfo
    __typename
  }
  outboundRegion {
    ...RegionInfo
    __typename
  }
  freightAssignmentInboundRegion
  freightAssignmentOutboundRegion
  code
  hotRoute
  size {
    ...KeyValueInfo
    __typename
  }
  trailerTypes {
    ...KeyValueInfo
    __typename
  }
  transportMode {
    ...KeyValueInfo
    __typename
  }
  routeVendors {
    ...RouteVendorInfoV2
    __typename
  }
  activeRouteVendors {
    ...RouteVendorInfoV2
    __typename
  }
  maxCost {
    ...RouteMaxCostInfo
    __typename
  }
  segmentCode
  division
  routeType
  postings {
    id
    active
    postedRate {
      value
      __typename
    }
    __typename
  }
  divisionV2
  businessUnit
  projectV2
  tarpType
  tarpCount
  braceTypes {
    option {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  braceCount
  cargoInsuranceV2 {
    ...CurrencyInfoV2
    __typename
  }
  __typename
}

fragment RouteDimensionsInfo on RouteDimensions {
  length(unit: ft) {
    unit
    value
    __typename
  }
  height(unit: in) {
    unit
    value
    __typename
  }
  width(unit: in) {
    unit
    value
    __typename
  }
  __typename
}

fragment RegionInfo on Region {
  name
  parenturn
  type
  urn
  id: urn
  __typename
}

fragment RouteVendorInfoV2 on RouteVendorV2 {
  bookedBy {
    ...EmployeeSimple
    __typename
  }
  bookedWith {
    ...ContactInfo
    __typename
  }
  createdBy {
    ...EmployeeSimple
    __typename
  }
  id
  vendorType
  bounced
  bounces {
    ...BounceInfoV2
    __typename
  }
  bookingNotes
  bracingType
  distance {
    asRoundedMiles
    __typename
  }
  expectedEmptyGeography {
    name
    id
    sourceId
    state
    timezone
    __typename
  }
  routeVendorCost {
    totalCost
    isVoucherRequirementBypassed
    routeId
    vendorId
    disableFinancials
    __typename
  }
  routeVendorReps {
    ...RouteVendorRepInfoV2
    __typename
  }
  routeVendorReferences {
    id
    value
    routeVendorReferenceType
    routeVendorReferenceTypeV2
    __typename
  }
  numberOfBraces
  numberOfPallets
  numberOfTarps
  palletType
  tarpType
  trailerHeight {
    asInches
    asRoundedInches
    __typename
  }
  trailerHeightV2(unit: in) {
    unit
    value
    __typename
  }
  trailerLength {
    asFeet
    asRoundedFeet
    __typename
  }
  trailerLengthV2(unit: ft) {
    unit
    value
    __typename
  }
  trailerType {
    ...KeyValueInfo
    __typename
  }
  trailerWidth {
    asInches
    asRoundedInches
    __typename
  }
  trailerWidthV2(unit: in) {
    unit
    value
    __typename
  }
  utcExpectedEmptyDatetime
  utcPickupEtaDatetime
  vendor @skip(if: $useCarrierV2) {
    ...CarrierInfo
    __typename
  }
  vendorV2 @include(if: $useCarrierV2) {
    ...CarrierInfoV2
    __typename
  }
  ...BookingSource
  __typename
}

fragment ContactInfo on Contact {
  id
  name
  contactTypeId
  main
  phoneNumber
  extension
  faxNumber
  emailAddress
  chatType {
    ...KeyValueInfo
    __typename
  }
  chatUsername
  chatTypeId
  main
  riskInfoSource
  thirdPartyId
  __typename
}

fragment BounceInfoV2 on BounceV2 {
  id
  active
  bounceReason {
    name
    active
    description
    id
    __typename
  }
  bounceType {
    name
    active
    description
    id
    __typename
  }
  createdAt
  createdByUser {
    id
    employee {
      ...EmployeeSimple
      __typename
    }
    __typename
  }
  notes
  rebooked
  rebookedAt
  rebookedByUser {
    id
    employee {
      ...EmployeeSimple
      __typename
    }
    __typename
  }
  routeVendor {
    id
    routeVendorCost {
      totalCost
      __typename
    }
    vendorType
    vendor {
      id
      name
      __typename
    }
    __typename
  }
  __typename
}

fragment RouteVendorRepInfoV2 on RouteVendorRepV2 {
  createdByUser @skip(if: $useEmployeeV2) {
    email
    employee {
      ...EmployeeSimple
      __typename
    }
    id
    __typename
  }
  createdByUserV2 @include(if: $useEmployeeV2) {
    email
    employee {
      ...EmployeeSimpleV2
      __typename
    }
    __typename
  }
  id
  main
  repType
  updatedByUser @skip(if: $useEmployeeV2) {
    email
    employee {
      ...EmployeeSimple
      __typename
    }
    id
    __typename
  }
  updatedByUserV2 @include(if: $useEmployeeV2) {
    email
    employee {
      ...EmployeeSimpleV2
      __typename
    }
    id
    __typename
  }
  employee @skip(if: $useEmployeeV2) {
    ...EmployeeSimple
    employeeGroup {
      ...KeyValueInfo
      __typename
    }
    employeeOffice {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  employeeV2 @include(if: $useEmployeeV2) {
    ...EmployeeSimpleV2
    employeeGroup {
      ...KeyValueInfo
      __typename
    }
    employeeOffice {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  __typename
}

fragment CarrierInfo on Carrier {
  code
  contacts {
    ...ContactInfo
    __typename
  }
  audits {
    ... on CarrierRepAudit {
      id
      actionType
      createdAt
      auditableRep {
        employee {
          id
          employeeDisplayName
          fullName
          __typename
        }
        __typename
      }
      currentValue {
        employeeId
        main
        repType
        __typename
      }
      previousValue {
        employeeId
        main
        repType
        __typename
      }
      createdByEmployee {
        id
        employeeDisplayName
        __typename
      }
      __typename
    }
    __typename
  }
  addresses {
    ...AddressBrief
    __typename
  }
  mainAddress {
    ...AddressBrief
    __typename
  }
  reps {
    ...RepInfo
    __typename
  }
  dbaName
  dotNumber
  dunsNumber
  id
  mcNumber
  name
  notes
  phoneNumber
  scacNumber
  status
  externalStatus
  carrierPaymentTermId
  paymentMethodId
  currencyId
  invoiceDistributionMethodId
  operatingStatus
  safetyRating
  accountingStatus
  remitToCarrier {
    id
    name
    code
    __typename
  }
  remittanceAddress {
    id
    __typename
  }
  remittanceEmail
  remittanceGrouping
  customerRelationships {
    ...CarrierCustomerRelationshipInfo
    __typename
  }
  accountingNotes {
    ...NoteInfo
    __typename
  }
  parent {
    id
    code
    name
    __typename
  }
  descendantIds
  electronicTrackingMethod {
    ...KeyValueInfo
    __typename
  }
  electronicTrackingType {
    ...KeyValueInfo
    __typename
  }
  manualTrackingMethod
  manualTrackingInformation
  entityType
  confirmationNotes {
    ...NoteInfo
    __typename
  }
  insurances {
    ...CarrierInsuranceInfo
    __typename
  }
  standing {
    ...CarrierStandingInfo
    __typename
  }
  carrierIdentifiers {
    ...CarrierIdentifierInfo
    __typename
  }
  __typename
}

fragment RepInfo on Rep {
  id
  main
  repType
  isLoadRep
  employee {
    ...EmployeeInfo
    __typename
  }
  __typename
}

fragment EmployeeInfo on Employee {
  companyEmail
  division {
    ...KeyValueInfo
    __typename
  }
  divisionId
  email
  emergencyContact
  emergencyPhone
  employeeCompanyLevelId
  employeeDepartmentId
  employeeDepartmentLevelId
  employeeDisplayName
  employeeGenderId
  employeeGroupId
  employeeGroup {
    ...KeyValueInfo
    __typename
  }
  employeeId
  employeeOfficeId
  employeeOffice {
    ...KeyValueInfo
    __typename
  }
  employeeRoleId
  employeeShirtSizeId
  employeeStatus {
    id
    active
    __typename
  }
  employeeSuffixId
  employeeTimeId
  employeeTypeId
  ext
  firstName
  firstNameDotLastName
  fullName
  hireDate
  id
  lastName
  managerId
  manager {
    ...EmployeeSimple
    __typename
  }
  middleName
  mobilePhone
  nickname
  personalEmail
  phoneNumber
  relationship
  slackName
  subRegion
  termDate
  title
  userId
  __typename
}

fragment CarrierCustomerRelationshipInfo on CarrierCustomerRelationship {
  id
  active
  bypassCompliance
  canLoad
  carrier {
    id
    name
    code
    __typename
  }
  customer {
    id
    name
    __typename
  }
  notes {
    id
    text
    noteType
    __typename
  }
  relationshipType
  createdAt
  createdBy {
    employee {
      id
      firstName
      lastName
      __typename
    }
    __typename
  }
  updatedAt
  updatedBy {
    employee {
      id
      firstName
      lastName
      __typename
    }
    __typename
  }
  __typename
}

fragment NoteInfo on Note {
  createdAt
  id
  noteType
  noteableId
  noteableType
  text
  updatedAt
  __typename
}

fragment CarrierInsuranceInfo on CarrierInsurance {
  id
  carrierInsuranceTypeId
  producer
  insurer
  identification
  limit
  effectiveDate
  expirationDate
  cancelDate
  exemptions
  underwriterRating
  rmisCovgId
  __typename
}

fragment CarrierStandingInfo on CarrierStanding {
  typeId
  statusTypeId
  reasonCodeId
  notes
  updatedAt
  updatedByUser {
    id
    employee {
      id
      fullName
      __typename
    }
    __typename
  }
  __typename
}

fragment CarrierIdentifierInfo on CarrierIdentifier {
  id
  code
  carrierIdentifierTypeId
  link
  __typename
}

fragment CarrierInfoV2 on CarrierV2 {
  code
  roeStatus
  complianceEmail
  contacts {
    ...CarrierContactInfo
    __typename
  }
  audits {
    ... on CarrierRepAuditV2 {
      id
      actionType
      createdAt
      auditableRep {
        employee {
          id
          employeeDisplayName
          fullName
          __typename
        }
        __typename
      }
      currentValue {
        employeeId
        main
        repType
        __typename
      }
      previousValue {
        employeeId
        main
        repType
        __typename
      }
      createdByEmployee {
        id
        employeeDisplayName
        __typename
      }
      __typename
    }
    __typename
  }
  addresses {
    ...CarrierAddressBrief
    __typename
  }
  mainAddress {
    ...CarrierAddressBrief
    __typename
  }
  reps {
    ...RepInfoV2
    __typename
  }
  dbaName
  dotNumber
  dunsNumber
  id
  mcNumber
  name
  website
  notes
  phoneNumber
  scacNumber
  status
  externalStatus
  carrierPaymentTermId
  paymentMethodId
  currencyId
  invoiceDistributionMethodId
  operatingStatus
  safetyRating
  accountingStatus
  remitToCarrier {
    id
    name
    code
    __typename
  }
  remittanceAddress {
    id
    __typename
  }
  remittanceEmail
  remittanceGrouping
  customerRelationships {
    ...CarrierCustomerRelationshipInfoV2
    __typename
  }
  accountingNotes {
    ...CarrierNoteInfo
    __typename
  }
  parent {
    id
    code
    name
    __typename
  }
  descendantIds
  electronicTrackings {
    ...CarrierElectronictrackingInfo
    __typename
  }
  electronicTrackingMethod {
    ...KeyValueInfo
    __typename
  }
  electronicTrackingType {
    ...KeyValueInfo
    __typename
  }
  manualTrackingMethod
  manualTrackingInformation
  entityType
  confirmationNotes {
    ...CarrierNoteInfo
    __typename
  }
  insurances {
    ...CarrierInsuranceInfoV2
    __typename
  }
  standing {
    ...CarrierStandingInfoV2
    __typename
  }
  groups {
    ...CarrierGroupInfo
    __typename
  }
  carrierIdentifiers {
    ...CarrierIdentifierInfoV2
    __typename
  }
  __typename
}

fragment CarrierContactInfo on CarrierContact {
  id
  name
  contactTypeId
  main
  phoneNumber
  extension
  faxNumber
  emailAddress
  chatType {
    ...KeyValueInfo
    __typename
  }
  chatUsername
  chatTypeId
  main
  riskInfoSource
  thirdPartyId
  __typename
}

fragment CarrierAddressBrief on CarrierAddress {
  id
  carrierId
  createdAt
  updatedAt
  addressType {
    ...KeyValueInfo
    __typename
  }
  addressTypeId
  city
  country
  main
  postalCode
  state
  street1
  street2
  geopoint {
    lon
    lat
    __typename
  }
  isVerified
  riskInfoSource
  thirdPartyId
  __typename
}

fragment RepInfoV2 on RepV2 {
  id
  main
  repType
  isLoadRep
  repTypeKeyId
  divisionId
  active
  modeId
  sizeId
  businessUnitId
  directionId
  employee {
    ...EmployeeInfoV2
    ...EmployeeGroupsInfoV2
    __typename
  }
  __typename
}

fragment EmployeeInfoV2 on EmployeeV2 {
  id
  businessUnit {
    id
    name
    active
    __typename
  }
  businessUnitId
  companyEmail
  division {
    ...KeyValueInfo
    __typename
  }
  divisionId
  email
  emergencyContact
  emergencyPhone
  employeeCompanyLevelId
  employeeDepartmentId
  employeeDepartmentLevelId
  employeeDisplayName
  employeeGenderId
  employeeGroupId
  employeeGroup {
    ...KeyValueInfo
    __typename
  }
  employeeId
  employeeOfficeId
  employeeOffice {
    ...KeyValueInfo
    __typename
  }
  employeeRoleId
  employeeShirtSizeId
  employeeStatus {
    id
    active
    __typename
  }
  employeeSuffixId
  employeeTimeId
  employeeTypeId
  ext
  firstName
  firstNameDotLastName
  fullName
  hireDate
  lastName
  managerId
  manager {
    ...EmployeeSimpleV2
    __typename
  }
  middleName
  mobilePhone
  nickname
  personalEmail
  phoneNumber
  project {
    id
    name
    active
    __typename
  }
  projectId
  relationship
  slackName
  subRegion
  termDate
  title
  userId
  __typename
}

fragment EmployeeGroupsInfoV2 on EmployeeV2 {
  employeeGroups {
    ...KeyValueInfo
    __typename
  }
  __typename
}

fragment CarrierCustomerRelationshipInfoV2 on CarrierCustomerRelationshipV2 {
  id
  active
  bypassCompliance
  canLoad
  carrier {
    id
    name
    code
    __typename
  }
  customer {
    id
    name
    __typename
  }
  notes {
    id
    text
    noteType
    __typename
  }
  relationshipType
  createdAt
  createdBy {
    employee {
      id
      firstName
      lastName
      __typename
    }
    __typename
  }
  updatedAt
  updatedBy {
    employee {
      id
      firstName
      lastName
      __typename
    }
    __typename
  }
  __typename
}

fragment CarrierNoteInfo on CarrierNote {
  createdAt
  id
  noteType
  carrierId
  text
  updatedAt
  __typename
}

fragment CarrierElectronictrackingInfo on CarrierElectronicTracking {
  id
  electronicTrackingMethod {
    id
    name
    __typename
  }
  electronicTrackingType {
    id
    name
    __typename
  }
  electronicTrackingMethodId
  electronicTrackingTypeId
  priority
  __typename
}

fragment CarrierInsuranceInfoV2 on CarrierInsuranceV2 {
  id
  carrierInsuranceTypeId
  producer
  insurer
  identification
  limit
  effectiveDate
  expirationDate
  cancelDate
  exemptions
  underwriterRating
  rmisCovgId
  __typename
}

fragment CarrierStandingInfoV2 on CarrierStandingV2 {
  typeId
  statusTypeId
  reasonCodeId
  notes
  updatedAt
  updatedByUser {
    id
    employee {
      id
      fullName
      __typename
    }
    __typename
  }
  __typename
}

fragment CarrierGroupInfo on CarrierGroup {
  id
  carrierId
  employeeGroupId
  employeeDivisionId
  groupTypeId
  employeeGroup {
    ...KeyValueInfo
    __typename
  }
  groupType {
    ...KeyValueInfo
    __typename
  }
  employeeDivision {
    ...KeyValueInfo
    __typename
  }
  __typename
}

fragment CarrierIdentifierInfoV2 on CarrierIdentifierV2 {
  id
  code
  carrierIdentifierTypeId
  link
  __typename
}

fragment BookingSource on RouteVendorV2 {
  bookingSource {
    id
    name
    __typename
  }
  __typename
}

fragment RouteMaxCostInfo on RouteMaxCostType {
  loadId
  maxCost
  overMax
  routeId
  __typename
}

fragment RouteStopForStopEventsGrid on RouteStop {
  id
  computedCurrentAppointment {
    requestedEnd {
      value
      timezone
      __typename
    }
    requestedStart {
      value
      timezone
      __typename
    }
    requestedTimeRange {
      endOffsetMs
      startOffsetMs
      __typename
    }
    __typename
  }
  __typename
}

fragment LoadRouteStopInfo on RouteStop {
  address {
    ...StopAddressInfo
    __typename
  }
  apptConfBy
  apptReqWith
  availableEnd {
    ...DatetimeWithTimezoneInfo
    __typename
  }
  availableEndTimes {
    ...StopRange
    __typename
  }
  availableStart {
    ...DatetimeWithTimezoneInfo
    __typename
  }
  availableStartTimes {
    ...StopRange
    __typename
  }
  bolNumber
  commodities {
    ...CommodityInfoV2
    __typename
  }
  distanceToNext(unit: mi) {
    unit
    value
    __typename
  }
  facility @skip(if: $useFacilityV2) {
    ...LoadRouteStopFacilityInfo
    __typename
  }
  facilityV2 @include(if: $useFacilityV2) {
    ...LoadRouteStopFacilityInfoV2
    __typename
  }
  freightAssignmentRegion {
    ...FreightAssignmentRegionInfo
    __typename
  }
  id
  liveType
  loadFrom {
    ...KeyValueInfo
    __typename
  }
  note
  numberOfPallets
  refs {
    type {
      ...KeyValueInfo
      __typename
    }
    value
    id
    __typename
  }
  reqDate {
    ...DatetimeWithTimezoneInfo
    __typename
  }
  requirements {
    option {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  computedCurrentAppointment {
    ...AppointmentV2ForCCAInfo
    __typename
  }
  appointment {
    ...AppointmentV2Info
    __typename
  }
  appointments {
    ...AppointmentV2Info
    __typename
  }
  scheduleType
  sealNumber
  trackingAutoETADatetime
  trackingManualETADatetime
  trackingAutoETAUsesDataScienceFormula
  type
  loadStopType
  unloadFrom {
    ...KeyValueInfo
    __typename
  }
  workType
  stopEventsV2 {
    id
    eventTypeID
    eventSubTypeID
    eventSubTypeDatetime
    eventSubTypeTimezone
    __typename
  }
  schedulingLog {
    ...SchedulingLogInfo
    __typename
  }
  isOrderStop
  orderStopId
  __typename
}

fragment StopAddressInfo on StopAddress {
  geopoint {
    lat
    lon
    __typename
  }
  city
  country
  id
  postalCode
  state
  street1
  street2
  __typename
}

fragment DatetimeWithTimezoneInfo on DatetimeWithTimezone {
  value
  timezone
  __typename
}

fragment StopRange on ScheduleRange {
  id
  endOffsetMs
  startOffsetMs
  __typename
}

fragment LoadRouteStopFacilityInfo on Facility {
  id
  code
  name
  timezone
  status
  externalNotes {
    ...NoteInfo
    __typename
  }
  facilityNote
  schedulingContact
  loadFromType {
    ...KeyValueInfo
    __typename
  }
  unloadFromType {
    ...KeyValueInfo
    __typename
  }
  schedulingSystemType {
    ...KeyValueInfo
    __typename
  }
  schedules {
    ...ScheduleInfo
    __typename
  }
  customerFacilities @include(if: $useCustomerLoadDefaults) {
    id
    customerId
    facilityId
    schedulingSystem
    isAutoScheduleEligible
    isAutoScheduleDefault
    drop
    __typename
  }
  facilityLoadDefaults @include(if: $useCustomerLoadDefaults) {
    id
    facilityId
    schedSystem
    autoSchedEligible
    autoSchedDefault
    __typename
  }
  addresses {
    ...AddressBrief
    __typename
  }
  mainAddress {
    ...AddressBrief
    __typename
  }
  contacts {
    ...ContactInfo
    __typename
  }
  phoneNumber
  __typename
}

fragment ScheduleInfo on Schedule {
  appointmentType
  dropType
  serviceType
  trailerTypeNullable {
    ...KeyValueInfo
    __typename
  }
  trailerTypeIdNullable
  id
  modeType
  scheduleTypeNullable
  workType
  loadSize {
    ...KeyValueInfo
    __typename
  }
  loadSizeId
  routeTransportMode {
    ...KeyValueInfo
    __typename
  }
  routeTransportModeId
  sunday {
    ...ScheduleEntryInfo
    __typename
  }
  monday {
    ...ScheduleEntryInfo
    __typename
  }
  tuesday {
    ...ScheduleEntryInfo
    __typename
  }
  wednesday {
    ...ScheduleEntryInfo
    __typename
  }
  thursday {
    ...ScheduleEntryInfo
    __typename
  }
  friday {
    ...ScheduleEntryInfo
    __typename
  }
  saturday {
    ...ScheduleEntryInfo
    __typename
  }
  __typename
}

fragment ScheduleEntryInfo on ScheduleEntry {
  closed
  hours {
    ...ScheduleRangeInfo
    __typename
  }
  id
  __typename
}

fragment ScheduleRangeInfo on ScheduleRange {
  endOffsetMs
  id
  startOffsetMs
  __typename
}

fragment LoadRouteStopFacilityInfoV2 on FacilityV2 {
  id
  code
  name
  timezone
  status
  externalNotes {
    ...FacilityNoteInfo
    __typename
  }
  facilityNote
  schedulingContact
  loadFromType {
    ...KeyValueInfo
    __typename
  }
  unloadFromType {
    ...KeyValueInfo
    __typename
  }
  schedulingSystemType {
    ...KeyValueInfo
    __typename
  }
  schedules {
    ...ScheduleInfoV2
    __typename
  }
  customerFacilities @include(if: $useCustomerLoadDefaults) {
    id
    customerId
    facilityId
    schedulingSystem
    isAutoScheduleEligible
    isAutoScheduleDefault
    drop
    __typename
  }
  facilityLoadDefaults @include(if: $useCustomerLoadDefaults) {
    id
    facilityId
    schedSystem
    autoSchedEligible
    autoSchedDefault
    __typename
  }
  addresses {
    ...FacilityAddressBrief
    __typename
  }
  mainAddress {
    ...FacilityAddressBrief
    __typename
  }
  contacts {
    ...FacilityContactInfo
    __typename
  }
  phoneNumber
  __typename
}

fragment FacilityNoteInfo on FacilityNote {
  createdAt
  id
  noteType
  noteableId
  noteableType
  text
  updatedAt
  __typename
}

fragment ScheduleInfoV2 on ScheduleV2 {
  appointmentType
  dropType
  serviceType
  trailerType {
    ...KeyValueInfo
    __typename
  }
  trailerTypeId
  trailerTypeNullable {
    ...KeyValueInfo
    __typename
  }
  trailerTypeIdNullable
  id
  modeType
  scheduleType
  scheduleTypeNullable
  serviceType
  workType
  loadSize {
    ...KeyValueInfo
    __typename
  }
  loadSizeId
  routeTransportMode {
    ...KeyValueInfo
    __typename
  }
  routeTransportModeId
  sunday {
    ...ScheduleEntryInfoV2
    __typename
  }
  monday {
    ...ScheduleEntryInfoV2
    __typename
  }
  tuesday {
    ...ScheduleEntryInfoV2
    __typename
  }
  wednesday {
    ...ScheduleEntryInfoV2
    __typename
  }
  thursday {
    ...ScheduleEntryInfoV2
    __typename
  }
  friday {
    ...ScheduleEntryInfoV2
    __typename
  }
  saturday {
    ...ScheduleEntryInfoV2
    __typename
  }
  __typename
}

fragment ScheduleEntryInfoV2 on ScheduleEntryV2 {
  closed
  hours {
    ...ScheduleRangeInfoV2
    __typename
  }
  id
  __typename
}

fragment ScheduleRangeInfoV2 on ScheduleRangeV2 {
  endOffsetMs
  id
  startOffsetMs
  __typename
}

fragment FacilityContactInfo on FacilityContact {
  id
  name
  contactTypeId
  main
  phoneNumber
  extension
  faxNumber
  emailAddress
  chatType {
    ...KeyValueInfo
    __typename
  }
  chatUsername
  chatTypeId
  main
  riskInfoSource
  thirdPartyId
  __typename
}

fragment FreightAssignmentRegionInfo on FreightAssignmentRegion {
  region
  subRegion
  superRegion
  __typename
}

fragment AppointmentV2ForCCAInfo on AppointmentV2 {
  id
  status
  confirmed
  requestedStart {
    value
    timezone
    __typename
  }
  requestedEnd {
    value
    timezone
    __typename
  }
  requestedTimeRange {
    id
    endOffsetMs
    startOffsetMs
    __typename
  }
  __typename
}

fragment AppointmentV2Info on AppointmentV2 {
  id
  status
  confirmed
  createdAt
  updatedAt
  autoSchedule
  changedBy @skip(if: $useEmployeeV2) {
    id
    employeeDisplayName
    __typename
  }
  changedByV2 @include(if: $useEmployeeV2) {
    id
    employeeDisplayName
    __typename
  }
  requestedStart {
    value
    timezone
    __typename
  }
  requestedEnd {
    value
    timezone
    __typename
  }
  requestedTimeRange {
    id
    endOffsetMs
    startOffsetMs
    __typename
  }
  __typename
}

fragment SchedulingLogInfo on SchedulingLog {
  id
  category
  type
  reason
  scheduleReason
  changedBy @skip(if: $useEmployeeV2) {
    id
    employeeDisplayName
    __typename
  }
  changedByV2 @include(if: $useEmployeeV2) {
    id
    employeeDisplayName
    __typename
  }
  startDate {
    value
    timezone
    __typename
  }
  endDate {
    value
    timezone
    __typename
  }
  timeRange {
    id
    endOffsetMs
    startOffsetMs
    __typename
  }
  createdAt
  __typename
}

fragment LoadRouteStopInfoV2 on RouteStopV2 {
  address {
    ...StopAddressInfoV2
    __typename
  }
  apptConfBy
  apptReqWith
  availableEnd {
    ...DatetimeWithTimezoneInfo
    __typename
  }
  availableEndTimes {
    ...StopRange
    __typename
  }
  availableStart {
    ...DatetimeWithTimezoneInfo
    __typename
  }
  availableStartTimes {
    ...StopRange
    __typename
  }
  bolNumber
  commodities {
    ...CommodityInfoV2
    __typename
  }
  distanceToNext(unit: mi) {
    unit
    value
    __typename
  }
  facility @skip(if: $useFacilityV2) {
    ...LoadRouteStopFacilityInfo
    __typename
  }
  facilityV2 @include(if: $useFacilityV2) {
    ...LoadRouteStopFacilityInfoV2
    __typename
  }
  freightAssignmentRegion {
    ...FreightAssignmentRegionInfo
    __typename
  }
  id
  liveType
  loadFrom {
    ...KeyValueInfo
    __typename
  }
  note
  numberOfPallets
  refs {
    type {
      ...KeyValueInfo
      __typename
    }
    value
    id
    __typename
  }
  reqDate {
    ...DatetimeWithTimezoneInfo
    __typename
  }
  requirements {
    option {
      ...KeyValueInfo
      __typename
    }
    __typename
  }
  computedCurrentAppointment {
    ...AppointmentV2ForCCAInfo
    __typename
  }
  appointment {
    ...AppointmentV2Info
    __typename
  }
  appointments {
    ...AppointmentV2Info
    __typename
  }
  scheduleType
  sealNumber
  type
  loadStopType
  unloadFrom {
    ...KeyValueInfo
    __typename
  }
  workType
  stopEventsV2 {
    id
    eventTypeID
    eventSubTypeID
    eventSubTypeDatetime
    eventSubTypeTimezone
    __typename
  }
  schedulingLog {
    ...SchedulingLogInfo
    __typename
  }
  isOrderStop
  orderStopId
  __typename
}

fragment StopAddressInfoV2 on StopAddressV2 {
  geopoint {
    lat
    lon
    __typename
  }
  city
  country
  id
  postalCode
  state
  street1
  street2
  __typename
}

fragment LoadStopInfo on LoadStop {
  id
  loadId
  routeStopIds
  orderStopIds
  sequence
  __typename
}`