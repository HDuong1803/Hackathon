import { OutputListProcess } from '@app'
import { Process } from '@schemas'

class ProcessService {
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
}

export { ProcessService }
