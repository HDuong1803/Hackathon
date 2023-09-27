import mongoose, { Schema } from 'mongoose'

export interface IVaccinationStation extends Document {
  batchNo: string
  quantity: string
  arrivalDateTime: string
  vaccinationStationId: string
  shippingName: string
  shippingNo: string
  locationAddress: string
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

const VaccinationStationSchema = new Schema<IVaccinationStation>({
  batchNo: {
    type: String
  },
  quantity: {
    type: String
  },
  arrivalDateTime: {
    type: String
  },
  vaccinationStationId: {
    type: String
  },
  shippingName: {
    type: String
  },
  shippingNo: {
    type: String
  },
  locationAddress: {
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

export const VaccinationStation = mongoose.model(
  'VaccinationStation',
  VaccinationStationSchema,
  undefined,
  {
    overwriteModels: true
  }
)
