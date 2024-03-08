import mongoose, { Schema } from 'mongoose'

export interface ITimeline {
  batchNo: string
  warehouser: boolean
  distributor: boolean
  vaccinationStation: boolean
  vaccinatePerson: boolean
  createdAt: Date
}

const TimelineSchema = new Schema<ITimeline>({
  batchNo: {
    type: String
  },
  warehouser: {
    type: Boolean
  },
  distributor: {
    type: Boolean
  },
  vaccinationStation: {
    type: Boolean
  },
  vaccinatePerson: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const Timeline = mongoose.model('Timeline', TimelineSchema, undefined, {
  overwriteModels: true
})
