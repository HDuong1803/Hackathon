import { Constant } from '@constants'

const VACCINE_SUPPLY_CHAIN_ABI = {
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vaccineSystemAddress',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'batchNo',
          type: 'address'
        }
      ],
      name: 'CompleteBasicDetail',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'batchNo',
          type: 'address'
        }
      ],
      name: 'CompleteDistributor',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'batchNo',
          type: 'address'
        }
      ],
      name: 'CompleteVaccinatePerson',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'batchNo',
          type: 'address'
        }
      ],
      name: 'CompleteVaccinationStation',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'batchNo',
          type: 'address'
        }
      ],
      name: 'CompleteWarehouser',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipRenounced',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      inputs: [
        { internalType: 'string', name: '_producerName', type: 'string' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
        { internalType: 'string', name: '_optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: '_optimumRangeHum', type: 'string' }
      ],
      name: 'addBasicDetails',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getBalance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_batchNo', type: 'address' }],
      name: 'getBasicDetailsData',
      outputs: [
        { internalType: 'string', name: 'producerName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_batchNo', type: 'address' }],
      name: 'getDistributorData',
      outputs: [
        { internalType: 'string', name: 'destinationAddress', type: 'string' },
        { internalType: 'string', name: 'shippingName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'departureDateTime', type: 'uint256' },
        { internalType: 'uint256', name: 'estimateDateTime', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_batchNo', type: 'address' }],
      name: 'getNextAction',
      outputs: [{ internalType: 'string', name: 'action', type: 'string' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_batchNo', type: 'address' }],
      name: 'getVaccinateData',
      outputs: [
        { internalType: 'string', name: 'personName', type: 'string' },
        { internalType: 'uint256', name: 'age', type: 'uint256' },
        { internalType: 'uint256', name: 'identityCard', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'numberOfVaccinations',
          type: 'uint256'
        },
        { internalType: 'uint256', name: 'vaccinationDate', type: 'uint256' },
        { internalType: 'string', name: 'typeOfVaccine', type: 'string' },
        { internalType: 'string', name: 'phoneNumber', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_batchNo', type: 'address' }],
      name: 'getVaccinationStation',
      outputs: [
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'arrivalDateTime', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'vaccinationStationId',
          type: 'uint256'
        },
        { internalType: 'string', name: 'shippingName', type: 'string' },
        { internalType: 'string', name: 'shippingNo', type: 'string' },
        { internalType: 'string', name: 'locationAddress', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_batchNo', type: 'address' }],
      name: 'getWarehouserData',
      outputs: [
        { internalType: 'string', name: 'vaccineName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'storageDate', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' },
        { internalType: 'bool', name: 'isViolation', type: 'bool' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: '_batchNo', type: 'address' },
        { internalType: 'string', name: '_destinationAddress', type: 'string' },
        { internalType: 'string', name: '_shippingName', type: 'string' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
        {
          internalType: 'uint256',
          name: '_departureDateTime',
          type: 'uint256'
        },
        { internalType: 'uint256', name: '_estimateDateTime', type: 'uint256' },
        { internalType: 'string', name: '_optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: '_optimumRangeHum', type: 'string' }
      ],
      name: 'updateDistributorData',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: '_batchNo', type: 'address' },
        { internalType: 'string', name: '_personName', type: 'string' },
        { internalType: 'uint256', name: '_age', type: 'uint256' },
        { internalType: 'uint256', name: '_identityCard', type: 'uint256' },
        {
          internalType: 'uint256',
          name: '_numberOfVaccinations',
          type: 'uint256'
        },
        { internalType: 'uint256', name: '_vaccinationDate', type: 'uint256' },
        { internalType: 'string', name: '_typeOfVaccine', type: 'string' },
        { internalType: 'string', name: '_phoneNumber', type: 'string' }
      ],
      name: 'updateVaccinatePerson',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: '_batchNo', type: 'address' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
        { internalType: 'uint256', name: '_arrivalDateTime', type: 'uint256' },
        {
          internalType: 'uint256',
          name: '_vaccinationStationId',
          type: 'uint256'
        },
        { internalType: 'string', name: '_shippingName', type: 'string' },
        { internalType: 'string', name: '_shippingNo', type: 'string' },
        { internalType: 'string', name: '_locationAddress', type: 'string' }
      ],
      name: 'updateVaccinationStation',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: '_batchNo', type: 'address' },
        { internalType: 'string', name: '_vaccineName', type: 'string' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
        { internalType: 'uint256', name: '_storageDate', type: 'uint256' },
        { internalType: 'string', name: '_optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: '_optimumRangeHum', type: 'string' },
        { internalType: 'bool', name: '_isViolation', type: 'bool' }
      ],
      name: 'updateWarehouser',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ],
  address: Constant.VACCINE_SUPPLY_CHAIN_CONTRACT_ADDRESS
}

const VACCINE_SYSTEM_STORAGE_ABI = {
  abi: [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'caller',
          type: 'address'
        }
      ],
      name: 'AuthorizedCaller',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'caller',
          type: 'address'
        }
      ],
      name: 'DeAuthorizedCaller',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipRenounced',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      inputs: [{ internalType: 'address', name: '_caller', type: 'address' }],
      name: 'authorizeCaller',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'batchBasicDetails',
      outputs: [
        { internalType: 'string', name: 'producerName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'batchDistributor',
      outputs: [
        { internalType: 'string', name: 'destinationAddress', type: 'string' },
        { internalType: 'string', name: 'shippingName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'departureDateTime', type: 'uint256' },
        { internalType: 'uint256', name: 'estimateDateTime', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' },
        { internalType: 'bool', name: 'isViolation', type: 'bool' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'batchVaccinatedPerson',
      outputs: [
        { internalType: 'string', name: 'personName', type: 'string' },
        { internalType: 'uint256', name: 'age', type: 'uint256' },
        { internalType: 'uint256', name: 'identityCard', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'numberOfVaccinations',
          type: 'uint256'
        },
        { internalType: 'uint256', name: 'vaccinationDate', type: 'uint256' },
        { internalType: 'string', name: 'typeOfVaccine', type: 'string' },
        { internalType: 'string', name: 'phoneNumber', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'batchVaccinationStation',
      outputs: [
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'arrivalDateTime', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'vaccinationStationId',
          type: 'uint256'
        },
        { internalType: 'string', name: 'shippingName', type: 'string' },
        { internalType: 'string', name: 'shippingNo', type: 'string' },
        { internalType: 'string', name: 'locationAddress', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'batchWarehouser',
      outputs: [
        { internalType: 'string', name: 'vaccineName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'storageDate', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' },
        { internalType: 'bool', name: 'isViolation', type: 'bool' },
        { internalType: 'string', name: 'locationAddress', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_caller', type: 'address' }],
      name: 'deAuthorizeCaller',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_batchNo', type: 'address' }],
      name: 'getBasicDetails',
      outputs: [
        { internalType: 'string', name: 'producerName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: 'batchNo', type: 'address' }],
      name: 'getDistributorData',
      outputs: [
        { internalType: 'string', name: 'destinationAddress', type: 'string' },
        { internalType: 'string', name: 'shippingName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'departureDateTime', type: 'uint256' },
        { internalType: 'uint256', name: 'estimateDateTime', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '_batchNo', type: 'address' }],
      name: 'getNextAction',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: '_userAddress', type: 'address' }
      ],
      name: 'getUser',
      outputs: [
        { internalType: 'string', name: 'name', type: 'string' },
        { internalType: 'string', name: 'contactNo', type: 'string' },
        { internalType: 'string', name: 'role', type: 'string' },
        { internalType: 'bool', name: 'isActive', type: 'bool' },
        { internalType: 'string', name: 'profileHash', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: '_userAddress', type: 'address' }
      ],
      name: 'getUserRole',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: 'batchNo', type: 'address' }],
      name: 'getVaccinationPersonData',
      outputs: [
        { internalType: 'string', name: 'personName', type: 'string' },
        { internalType: 'uint256', name: 'age', type: 'uint256' },
        { internalType: 'uint256', name: 'identityCard', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'numberOfVaccinations',
          type: 'uint256'
        },
        { internalType: 'uint256', name: 'vaccinationDate', type: 'uint256' },
        { internalType: 'string', name: 'typeOfVaccine', type: 'string' },
        { internalType: 'string', name: 'phoneNumber', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: 'batchNo', type: 'address' }],
      name: 'getVaccinationStationData',
      outputs: [
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'arrivalDateTime', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'vaccinationStationId',
          type: 'uint256'
        },
        { internalType: 'string', name: 'shippingName', type: 'string' },
        { internalType: 'string', name: 'shippingNo', type: 'string' },
        { internalType: 'string', name: 'locationAddress', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: 'batchNo', type: 'address' }],
      name: 'getWarehouserData',
      outputs: [
        { internalType: 'string', name: 'vaccineName', type: 'string' },
        { internalType: 'uint256', name: 'quantity', type: 'uint256' },
        { internalType: 'uint256', name: 'storageDate', type: 'uint256' },
        { internalType: 'string', name: 'optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: 'optimumRangeHum', type: 'string' },
        { internalType: 'bool', name: 'isViolation', type: 'bool' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'lastAccess',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'string', name: '_producerName', type: 'string' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
        { internalType: 'string', name: '_optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: '_optimumRangeHum', type: 'string' }
      ],
      name: 'setBasicDetails',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: 'batchNo', type: 'address' },
        { internalType: 'string', name: '_destinationAddress', type: 'string' },
        { internalType: 'string', name: '_shippingName', type: 'string' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
        {
          internalType: 'uint256',
          name: '_departureDateTime',
          type: 'uint256'
        },
        { internalType: 'uint256', name: '_estimateDateTime', type: 'uint256' },
        { internalType: 'string', name: '_optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: '_optimumRangeHum', type: 'string' }
      ],
      name: 'setDistributor',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: 'batchNo', type: 'address' },
        { internalType: 'string', name: '_personName', type: 'string' },
        { internalType: 'uint256', name: '_age', type: 'uint256' },
        { internalType: 'uint256', name: '_identityCard', type: 'uint256' },
        {
          internalType: 'uint256',
          name: '_numberOfVaccinations',
          type: 'uint256'
        },
        { internalType: 'uint256', name: '_vaccinationDate', type: 'uint256' },
        { internalType: 'string', name: '_typeOfVaccine', type: 'string' },
        { internalType: 'string', name: '_phoneNumber', type: 'string' }
      ],
      name: 'setObjectInjection',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: '_userAddress', type: 'address' },
        { internalType: 'string', name: '_name', type: 'string' },
        { internalType: 'string', name: '_contactNo', type: 'string' },
        { internalType: 'string', name: '_role', type: 'string' },
        { internalType: 'bool', name: '_isActive', type: 'bool' },
        { internalType: 'string', name: '_profileHash', type: 'string' }
      ],
      name: 'setUser',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: 'batchNo', type: 'address' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
        { internalType: 'uint256', name: '_arrivalDateTime', type: 'uint256' },
        {
          internalType: 'uint256',
          name: '_vaccinationStationId',
          type: 'uint256'
        },
        { internalType: 'string', name: '_shippingName', type: 'string' },
        { internalType: 'string', name: '_shippingNo', type: 'string' },
        { internalType: 'string', name: '_locationAddress', type: 'string' }
      ],
      name: 'setVaccinationStation',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: 'batchNo', type: 'address' },
        { internalType: 'string', name: '_vaccineName', type: 'string' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
        { internalType: 'uint256', name: '_storageDate', type: 'uint256' },
        { internalType: 'string', name: '_optimumRangeTemp', type: 'string' },
        { internalType: 'string', name: '_optimumRangeHum', type: 'string' },
        { internalType: 'bool', name: '_isViolation', type: 'bool' }
      ],
      name: 'setWarehouser',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'userDetails',
      outputs: [
        { internalType: 'string', name: 'name', type: 'string' },
        { internalType: 'string', name: 'contactNo', type: 'string' },
        { internalType: 'bool', name: 'isActive', type: 'bool' },
        { internalType: 'string', name: 'profileHash', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ],
  address: Constant.VACCINE_SYSTEM_STORAGE_CONTRACT_ADDRESS
}

const VACCINE_USER_ATTEND_ABI = {
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vaccineSystemAddress',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipRenounced',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        { indexed: false, internalType: 'string', name: 'role', type: 'string' }
      ],
      name: 'UserRoleUpdate',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'contactNo',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'role',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'isActive',
          type: 'bool'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'profileHash',
          type: 'string'
        }
      ],
      name: 'UserUpdate',
      type: 'event'
    },
    {
      inputs: [
        { internalType: 'address', name: '_userAddress', type: 'address' }
      ],
      name: 'getUser',
      outputs: [
        { internalType: 'string', name: 'name', type: 'string' },
        { internalType: 'string', name: 'contactNo', type: 'string' },
        { internalType: 'string', name: 'role', type: 'string' },
        { internalType: 'bool', name: 'isActive', type: 'bool' },
        { internalType: 'string', name: 'profileHash', type: 'string' }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'string', name: '_name', type: 'string' },
        { internalType: 'string', name: '_contactNo', type: 'string' },
        { internalType: 'string', name: '_role', type: 'string' },
        { internalType: 'bool', name: '_isActive', type: 'bool' },
        { internalType: 'string', name: '_profileHash', type: 'string' }
      ],
      name: 'updateUser',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        { internalType: 'address', name: '_userAddress', type: 'address' },
        { internalType: 'string', name: '_name', type: 'string' },
        { internalType: 'string', name: '_contactNo', type: 'string' },
        { internalType: 'string', name: '_role', type: 'string' },
        { internalType: 'bool', name: '_isActive', type: 'bool' },
        { internalType: 'string', name: '_profileHash', type: 'string' }
      ],
      name: 'updateUserForAdmin',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ],
  address: Constant.VACCINE_USER_ATTEND_CONTRACT_ADDRESS
}

export {
  VACCINE_SUPPLY_CHAIN_ABI,
  VACCINE_SYSTEM_STORAGE_ABI,
  VACCINE_USER_ATTEND_ABI
}
