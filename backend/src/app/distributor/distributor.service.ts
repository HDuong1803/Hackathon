import { OutputListDistributor, TimelineService } from '@app'
import { Distributor } from '@schemas'

class DistributorService {
  public async createDistributor(batchNo: string): Promise<any> {
    await TimelineService.createTimeline({
      batchNo,
      producer: true,
      warehouser: true,
      distributor: true,
      vaccinationStation: false,
      vaccinatePerson: false
    })
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
}

export { DistributorService }
