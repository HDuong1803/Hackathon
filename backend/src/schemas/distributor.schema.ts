import mongoose, { Schema } from 'mongoose'

export interface IDistributor {
  batchNo: string
  destinationAddress: string
  shippingName: string
  quantity: string
  departureDateTime: string
  estimateDateTime: string
  optimumTemp: string
  optimumHum: string
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

const DistributorSchema = new Schema<IDistributor>({
  batchNo: {
    type: String
  },
  shippingName: {
    type: String
  },
  quantity: {
    type: String
  },
  departureDateTime: {
    type: String
  },
  estimateDateTime: {
    type: String
  },
  optimumTemp: {
    type: String
  },
  optimumHum: {
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

export const Distributor = mongoose.model(
  'Distributor',
  DistributorSchema,
  undefined,
  {
    overwriteModels: true
  }
)
