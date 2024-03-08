import mongoose, { Schema } from 'mongoose'
export interface ITemperature {
  temperature: string
  humidity: string
  sensorName: string
  createdAt: Date
}

const TemperatureSchema = new Schema<ITemperature>({
  temperature: String,
  humidity: String,
  sensorName: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const Temperature = mongoose.model(
  'Temperature',
  TemperatureSchema,
  undefined,
  {
    overwriteModels: true
  }
)
