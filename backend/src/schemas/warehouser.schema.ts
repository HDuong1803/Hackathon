import mongoose, { Schema } from 'mongoose'

export interface IWarehouser {
  batchNo: string
  vaccineName: string
  quantity: string
  storageDate: string
  optimumRangeTemp: string
  optimumRangeHum: string
  isViolation: boolean
  from: string
  to: string
  status: string
  transactionHash: string
  blockHash: string
  blockNumber: string
  confirmations: string
  byzantium: string
  transactionIndex: string
  contractAddress: string
  nextAcction: string
  ipfsLink: string
  createdAt: Date
}

const WarehouserSchema = new Schema<IWarehouser>({
  batchNo: {
    type: String
  },
  vaccineName: {
    type: String
  },
  quantity: {
    type: String
  },
  storageDate: {
    type: String
  },
  optimumRangeTemp: {
    type: String
  },
  optimumRangeHum: {
    type: String
  },
  isViolation: {
    type: Boolean
  },
  from: {
    type: String
  },
  to: {
    type: String
  },
  status: {
    type: String
  },
  transactionHash: {
    type: String
  },
  blockHash: {
    type: String
  },
  blockNumber: {
    type: String
  },
  confirmations: {
    type: String
  },
  byzantium: {
    type: String
  },
  transactionIndex: {
    type: String
  },
  contractAddress: {
    type: String
  },
  nextAcction: {
    type: String
  },
  ipfsLink: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const Warehouser = mongoose.model(
  'Warehouser',
  WarehouserSchema,
  undefined,
  {
    overwriteModels: true
  }
)
