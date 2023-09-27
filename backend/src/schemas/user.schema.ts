import mongoose, { Schema } from 'mongoose'

export interface IUser {
  userAddress: string
  name: string
  contactNo: string
  role: string
  isActive: boolean
  profileHash: string
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
  ipfsLink: string
  createdAt: Date
}

const UserSchema = new Schema<IUser>({
  userAddress: {
    type: String
  },
  name: {
    type: String
  },
  contactNo: {
    type: String
  },
  role: {
    type: String
  },
  isActive: {
    type: Boolean
  },
  profileHash: {
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
  ipfsLink: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const User = mongoose.model('User', UserSchema, undefined, {
  overwriteModels: true
})
