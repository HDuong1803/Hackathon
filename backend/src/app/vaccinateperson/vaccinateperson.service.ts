import { OutputListVaccinatePerson, TimelineService } from '@app'
import { VaccinatePerson } from '@schemas'

class VaccinatePersonService {
  public async createVaccinatePerson(batchNo: string): Promise<any> {
    const timeline = await TimelineService.createTimeline({
      batchNo,
      producer: true,
      warehouser: true,
      distributor: true,
      vaccinationStation: true,
      vaccinatePerson: true
    })

    const results = await timeline.save()

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
}

export { VaccinatePersonService }
