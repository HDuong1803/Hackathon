import { OutputListWarehouser, TimelineService } from '@app'
import { Warehouser } from '@schemas'

class WarehouserService {
  public async createWarehouser(batchNo: string): Promise<any> {
    const timeline = await TimelineService.createTimeline({
      batchNo,
      producer: true,
      warehouser: true,
      distributor: false,
      vaccinationStation: false,
      vaccinatePerson: false
    })

    const results = await timeline.save()

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
}

export { WarehouserService }
