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

export interface OutputListProcess {
  data: IProcess[]
  total: number
}
