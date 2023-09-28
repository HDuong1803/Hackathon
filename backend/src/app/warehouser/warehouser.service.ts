import { OutputListWarehouser, TimelineService } from '@app'
import { Constant } from '@constants'
import { Warehouser } from '@schemas'

class WarehouserService {
  public async createWarehouser(payload: any): Promise<any> {
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
    const results = await Warehouser.findOneAndUpdate(
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

  public async searchWarehouser(keyword: string): Promise<any> {
    try {
      const result = await Warehouser.find({
        $or: [{ batchNo: { $regex: keyword, $options: 'i' } }]
      }).limit(1)

      return result
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getWarehouser(_id: string): Promise<any> {
    try {
      const data = await Warehouser.findById(_id)
      return data
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getListWarehouser(
    page: number = 1,
    limit: number = 10
  ): Promise<OutputListWarehouser> {
    const offset = (page - 1) * limit
    const items = await Warehouser.find().skip(offset).limit(limit)
    const totalItem = await Warehouser.countDocuments()

    return {
      data: items,
      total: totalItem
    }
  }

  public async countSuccess() {
    try {
      const result = await Warehouser.countDocuments({
        status: 'SUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async countUnSuccess() {
    try {
      const result = await Warehouser.countDocuments({
        status: 'UNSUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { WarehouserService }
