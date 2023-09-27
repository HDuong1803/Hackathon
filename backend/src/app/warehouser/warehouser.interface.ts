export interface IWarehouser {
  batchNo: string
  vaccineName: string
  quantity: string
  storageDate: string
  optimumRangeTemp: string
  optimumRangeHum: string
  isViolation: boolean
  nextAcction: string
  createdAt: Date
}

export interface OutputListWarehouser {
  data: IWarehouser[]
  total: number
}
