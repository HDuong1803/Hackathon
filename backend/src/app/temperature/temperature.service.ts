import { ITemperature } from '@app'
import { Temperature } from '@schemas'

class TemperatureService {
  public async createTemp(payload: ITemperature): Promise<any> {
    try {
      await Temperature.create({ ...payload });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

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
