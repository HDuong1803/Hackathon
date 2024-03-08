import {
  VACCINE_SUPPLY_CHAIN_ABI,
  VACCINE_SYSTEM_STORAGE_ABI,
  VACCINE_USER_ATTEND_ABI,
  Constant
} from '@constants'
import Web3 from 'web3'

const web3 = new Web3(Constant.BLOCKCHAIN_URL)

const newContract = (abi: any, address: string) => {
  return new web3.eth.Contract(abi, address)
}

const getBlockByNumber = async (blockNumber: number) => {
  return await web3.eth.getBlock(blockNumber)
}

const vaccineSupplyChainContract = newContract(
  VACCINE_SUPPLY_CHAIN_ABI.abi,
  VACCINE_SUPPLY_CHAIN_ABI.address
)
const vaccineSystemStorageContract = newContract(
  VACCINE_SYSTEM_STORAGE_ABI.abi,
  VACCINE_SYSTEM_STORAGE_ABI.address
)
const vaccineUserAttendContract = newContract(
  VACCINE_USER_ATTEND_ABI.abi,
  VACCINE_USER_ATTEND_ABI.address
)

export {
  web3,
  newContract,
  vaccineSupplyChainContract,
  vaccineSystemStorageContract,
  vaccineUserAttendContract,
  getBlockByNumber
}
