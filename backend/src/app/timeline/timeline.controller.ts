import { logError, onError, onSuccess, type Option } from '@constants'
import { Singleton } from '@providers'
import { Request as ExpressRequest } from 'express'
import { Controller, Get, Query, Request, Route, Security, Tags } from 'tsoa'

@Tags('Timeline')
@Route('timeline')
@Security('authorization')
export class TimelineController extends Controller {
  @Get('search')
  public async searchTimeline(
    @Request() req: ExpressRequest,
    @Query() keyword: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getTimelineInstance().searchTimeline(
        keyword
      )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
