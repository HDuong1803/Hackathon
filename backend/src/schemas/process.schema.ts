import mongoose, { Schema } from 'mongoose'

export interface IProcess {
  batchNo: string
  producerName: string
  quantity: string
  optimumRangeTemp: string
  optimumRangeHum: string
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
  nextAction: string
  ipfsLink: string
  createdAt: Date
}

const ProcessSchema = new Schema<IProcess>({
  batchNo: {
    type: String
  },
  producerName: {
    type: String
  },
  quantity: {
    type: String
  },
  optimumRangeTemp: {
    type: String
  },
  optimumRangeHum: {
    type: String
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
  nextAction: {
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

export const Process = mongoose.model('Process', ProcessSchema, undefined, {
  overwriteModels: true
})
