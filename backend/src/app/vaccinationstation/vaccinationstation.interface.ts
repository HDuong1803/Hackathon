export interface IVaccinationStation {
  batchNo: string
  quantity: string
  arrivalDateTime: string
  vaccinationStationId: string
  shippingName: string
  shippingNo: string
  locationAddress: string
  nextAcction: string
  createdAt: Date
}

export interface OutputListVaccinationStation {
  data: IVaccinationStation[]
  total: number
}
