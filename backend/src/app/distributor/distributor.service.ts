import { OutputListDistributor, TimelineService } from '@app'
import { Constant } from '@constants'
import { Distributor } from '@schemas'

class DistributorService {
  public async createDistributor(payload: any): Promise<any> {
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
      nextAcction = Constant.NEXT_ACTION.VACCINATION_STATION,
      ipfsLink
    } = payload
    const results = await Distributor.findOneAndUpdate(
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
      distributor: true,
      vaccinationStation: false,
      vaccinatePerson: false
    })

    return results
  }

  public async searchDistributor(keyword: string): Promise<any> {
    try {
      const result = await Distributor.find({
        $or: [{ batchNo: { $regex: keyword, $options: 'i' } }]
      }).limit(1)

      return result
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getDistributor(_id: string): Promise<any> {
    try {
      const data = await Distributor.findById(_id)
      return data
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getListDistributor(
    page: number = 1,
    limit: number = 10
  ): Promise<OutputListDistributor> {
    const offset = (page - 1) * limit
    const items = await Distributor.find().skip(offset).limit(limit)
    const totalItem = await Distributor.countDocuments()

    return {
      data: items,
      total: totalItem
    }
  }

  public async countSuccess() {
    try {
      const result = await Distributor.countDocuments({
        status: 'SUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async countUnSuccess() {
    try {
      const result = await Distributor.countDocuments({
        status: 'UNSUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { DistributorService }
