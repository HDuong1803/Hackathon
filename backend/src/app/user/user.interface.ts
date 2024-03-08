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

export interface OutputListUser {
  data: IUser[]
  total: number
}
