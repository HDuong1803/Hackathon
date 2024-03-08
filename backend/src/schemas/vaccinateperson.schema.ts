import mongoose, { Schema } from 'mongoose'

export interface IVaccinatePerson {
  batchNo: string
  personName: string
  age: string
  identityCard: string
  numberOfVaccinations: string
  vaccinationDate: string
  typeOfVaccine: string
  phoneNumber: string
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

const VaccinatePersonSchema = new Schema<IVaccinatePerson>({
  batchNo: {
    type: String
  },
  personName: {
    type: String
  },
  age: {
    type: String
  },
  identityCard: {
    type: String
  },
  numberOfVaccinations: {
    type: String
  },
  vaccinationDate: {
    type: String
  },
  typeOfVaccine: {
    type: String
  },
  phoneNumber: {
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

export const VaccinatePerson = mongoose.model(
  'VaccinatePerson',
  VaccinatePersonSchema,
  undefined,
  {
    overwriteModels: true
  }
)
