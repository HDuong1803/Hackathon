import { OutputListVaccinatePerson, TimelineService } from '@app'
import { Constant } from '@constants'
import { VaccinatePerson } from '@schemas'

class VaccinatePersonService {
  public async createVaccinatePerson(payload: any): Promise<any> {
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
      nextAcction = Constant.NEXT_ACTION.DISTRIBUTOR,
      ipfsLink
    } = payload
    const results = await VaccinatePerson.findOneAndUpdate(
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
          nextAcction,
          ipfsLink
        }
      }
    )
    await TimelineService.createTimeline({
      batchNo,
      warehouser: true,
      distributor: false,
      vaccinationStation: false,
      vaccinatePerson: false
    })

    return results
  }

  public async searchVaccinatePerson(keyword: string): Promise<any> {
    try {
      const result = await VaccinatePerson.find({
        $or: [{ batchNo: { $regex: keyword, $options: 'i' } }]
      }).limit(1)

      return result
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getVaccinatePerson(_id: string): Promise<any> {
    try {
      const data = await VaccinatePerson.findById(_id)
      return data
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getListVaccinatePerson(
    page: number = 1,
    limit: number = 10
  ): Promise<OutputListVaccinatePerson> {
    const offset = (page - 1) * limit
    const items = await VaccinatePerson.find().skip(offset).limit(limit)
    const totalItem = await VaccinatePerson.countDocuments()

    return {
      data: items,
      total: totalItem
    }
  }

  public async countSuccess() {
    try {
      const result = await VaccinatePerson.countDocuments({
        status: 'SUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async countUnSuccess() {
    try {
      const result = await VaccinatePerson.countDocuments({
        status: 'UNSUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { VaccinatePersonService }
