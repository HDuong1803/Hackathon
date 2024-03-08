export interface IDistributor {
  batchNo: string
  destinationAddress: string
  shippingName: string
  quantity: string
  departureDateTime: string
  estimateDateTime: string
  optimumTemp: string
  optimumHum: string
  nextAction: string
  createdAt: Date
}

export interface OutputListDistributor {
  data: IDistributor[]
  total: number
}
