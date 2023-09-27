import { Constant } from '@constants'

class GeneralService {
  public async getProducer(): Promise<any> {
    try {
      return Constant.PRODUCER
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async getDistributor(): Promise<any> {
    try {
      return Constant.DISTRIBUTOR
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async getWarehouser(): Promise<any> {
    try {
      return Constant.WAREHOUSER
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { GeneralService }
