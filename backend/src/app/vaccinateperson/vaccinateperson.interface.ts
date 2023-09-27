export interface IVaccinatePerson {
  batchNo: string
  personName: string
  age: string
  identityCard: string
  numberOfVaccinations: string
  vaccinationDate: string
  typeOfVaccine: string
  phoneNumber: string
  nextAcction: string
  createdAt: Date
}

export interface OutputListVaccinatePerson {
  data: IVaccinatePerson[]
  total: number
}
