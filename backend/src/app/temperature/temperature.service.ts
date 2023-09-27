import { Temperature } from '@schemas'

class TemperatureService {
  public async getAllTemp() {
    try {
      const data = await Temperature.find()
      return data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { TemperatureService }
