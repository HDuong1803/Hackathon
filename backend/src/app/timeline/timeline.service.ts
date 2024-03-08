import { ITimeline } from '@app'
import { Timeline } from '@schemas'

class TimelineService {
  public async searchTimeline(keyword: string): Promise<any> {
    try {
      const result = await Timeline.find({
        $or: [{ batchNo: { $regex: keyword, $options: 'i' } }]
      }).limit(1)

      return result
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public static async createTimeline(payload: ITimeline): Promise<any> {
    try {
      const {
        batchNo,
        warehouser,
        distributor,
        vaccinationStation,
        vaccinatePerson
      } = payload
      let timeline = await Timeline.findOne({
        batchNo
      })

      if (timeline) {
        await Timeline.findOneAndUpdate(
          { batchNo: batchNo },
          {
            $set: {
              warehouser,
              distributor,
              vaccinationStation,
              vaccinatePerson
            }
          }
        )
      } else {
        const entity = new Timeline({
          batchNo,
          warehouser,
          distributor,
          vaccinationStation,
          vaccinatePerson
        })

        const results = await entity.save()

        return results
      }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { TimelineService }
