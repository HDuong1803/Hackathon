export interface IUser {
  userAddress: string
  name: string
  contactNo: string
  role: string
  isActive: boolean
  profileHash: string
  createdAt: Date
}

export interface OutputListUser {
  data: IUser[]
  total: number
}
