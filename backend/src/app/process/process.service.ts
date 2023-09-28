import { OutputListProcess } from '@app'
import { Process } from '@schemas'
import { Constant } from '@constants'

class ProcessService {
  public async createProcess(payload: any) {
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
      nextAcction = Constant.NEXT_ACTION.WAREHOUSER,
      ipfsLink
    } = payload
    const results = await Process.findOneAndUpdate(
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

    return results
  }

  public async searchProcess(keyword: string): Promise<any> {
    try {
      const result = await Process.find({
        $or: [{ batchNo: { $regex: keyword, $options: 'i' } }]
      }).limit(1)

      return result
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getProcessDetail(_id: string): Promise<any> {
    try {
      const data = await Process.findById(_id)
      return data
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getListProcess(
    page: number = 1,
    limit: number = 10
  ): Promise<OutputListProcess> {
    const offset = (page - 1) * limit
    const items = await Process.find().skip(offset).limit(limit)
    const totalItem = await Process.countDocuments()

    return {
      data: items,
      total: totalItem
    }
  }

  public async countSuccess() {
    try {
      const result = await Process.countDocuments({
        status: 'SUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async countUnSuccess() {
    try {
      const result = await Process.countDocuments({
        status: 'UNSUCCESS'
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { ProcessService }
