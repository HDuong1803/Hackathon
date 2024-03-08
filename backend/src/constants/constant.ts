import { DISTRIBUTOR } from './data/distributor.data'
import { PRODUCER } from './data/producer.data'
import { USERROLE } from './data/userole.data'
import { WAREHOUSER } from './data/warehouse.data'

const TRANSACTION_STATUS = {
  FAILURE: 0,
  SUCCESS: 1
}

const Constant = {
  PORT: `${process.env.PORT}`,
  MONGODB_URL: `${process.env.MONGODB_URL}`,
  BLOCKCHAIN_URL: `${process.env.BLOCKCHAIN_URL}`,
  API_KEY: `${process.env.API_KEY}`,
  VACCINE_SUPPLY_CHAIN_CONTRACT_ADDRESS: `${process.env.VACCINE_SUPPLY_CHAIN_CONTRACT_ADDRESS}`,
  VACCINE_SYSTEM_STORAGE_CONTRACT_ADDRESS: `${process.env.VACCINE_SYSTEM_STORAGE_CONTRACT_ADDRESS}`,
  VACCINE_USER_ATTEND_CONTRACT_ADDRESS: `${process.env.VACCINE_USER_ATTEND_CONTRACT_ADDRESS}`,
  NETWORK_STATUS_CODE: {
    EMPTY: 204,
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    NOT_ENOUGH_RIGHT: 403,
    CONTENT_TOO_LARGE: 413,
    VALIDATE_ERROR: 422
  },
  NETWORK_STATUS_MESSAGE: {
    EMPTY: 'Empty',
    SUCCESS: 'Success',
    BAD_REQUEST: 'Bad request',
    UNAUTHORIZED: 'Unauthorized',
    NOT_FOUND: 'Not found',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    NOT_ENOUGH_RIGHT: 'Not Enough Rights',
    CONTENT_TOO_LARGE: 'Content too large',
    VALIDATE_ERROR: 'Validate error'
  },
  NEXT_ACTION: {
    WAREHOUSER: 'WAREHOUSER',
    DISTRIBUTOR: 'DISTRIBUTOR',
    VACCINATION_STATION: 'VACCINATION_STATION',
    OBJECT_INJECTION: 'OBJECT_INJECTION',
    DONE: 'DONE'
  },
  PRODUCER,
  DISTRIBUTOR,
  USERROLE,
  WAREHOUSER
}

export { Constant, TRANSACTION_STATUS }
