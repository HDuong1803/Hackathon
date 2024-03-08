import { OutputListVaccinationStation, TimelineService } from '@app'
import { Constant } from '@constants'
import { VaccinationStation } from '@schemas'

class VaccinationStationService {
  public async createVaccinationStation(payload: any): Promise<any> {
    const {
      batchNo,
      from,
      to,
      status,
      transactionHash,
      blockHash,
      blockNumber,
      confirmations,
      byzantium,
      transactionIndex,
      contractAddress,
      nextAction = Constant.NEXT_ACTION.OBJECT_INJECTION,
      ipfsLink
    } = payload
    const results = await VaccinationStation.findOneAndUpdate(
      { batchNo },
      {
        $set: {
          from,
          to,
          status: status === 1 ? 'SUCCESS' : 'UNSUCCESS',
          transactionHash,
          blockHash,
          blockNumber,
          confirmations,
          byzantium,
          transactionIndex,
          contractAddress,
          nextAction,
          ipfsLink
        }
      }
    )
    await TimelineService.createTimeline({
      batchNo,
      warehouser: true,
      distributor: true,
      vaccinationStation: true,
      vaccinatePerson: false
    })

    return results
  }

  public async searchVaccinationStation(keyword: string): Promise<any> {
    try {
      const result = await VaccinationStation.find({
        $or: [{ batchNo: { $regex: keyword, $options: 'i' } }]
      }).limit(1)

      return result
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getVaccinationStation(batchNo: string): Promise<any> {
    try {
      const data = await VaccinationStation.findOne({batchNo})
      return data
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getListVaccinationStation(
    page: number = 1,
    limit: number = 10
  ): Promise<OutputListVaccinationStation> {
    const offset = (page - 1) * limit
    const items = await VaccinationStation.find().skip(offset).limit(limit)
    const totalItem = await VaccinationStation.countDocuments()

    return {
      data: items,
      total: totalItem
    }
  }

  public async countSuccess() {
    try {
      const result = await VaccinationStation.countDocuments({
        status: 'SUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async countUnSuccess() {
    try {
      const result = await VaccinationStation.countDocuments({
        status: 'UNSUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { VaccinationStationService }
