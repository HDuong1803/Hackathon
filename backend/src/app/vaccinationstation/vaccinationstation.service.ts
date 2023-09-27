import { OutputListVaccinationStation, TimelineService } from '@app'
import { VaccinationStation } from '@schemas'

class VaccinationStationService {
  public async createVaccinationStation(batchNo: string): Promise<any> {
    const timeline = await TimelineService.createTimeline({
      batchNo,
      producer: true,
      warehouser: true,
      distributor: true,
      vaccinationStation: true,
      vaccinatePerson: false
    })

    const results = await timeline.save()

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

  public async getVaccinationStation(_id: string): Promise<any> {
    try {
      const data = await VaccinationStation.findById(_id)
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
}

export { VaccinationStationService }
