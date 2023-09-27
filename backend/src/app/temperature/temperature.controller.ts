import { logError, onError, onSuccess, type Option } from '@constants'
import { Singleton } from '@providers'
import { Request as ExpressRequest } from 'express'
import { Controller, Get, Request, Route, Security, Tags } from 'tsoa'

@Tags('Temperature')
@Route('temperature')
@Security('authorization')
export class TemperatureController extends Controller {
  @Get('producer')
  public async getAllTemp(
    @Request() req: ExpressRequest
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getTemperatureInstance().getAllTemp()
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
