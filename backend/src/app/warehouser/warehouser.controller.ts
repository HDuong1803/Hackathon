import { logError, onError, onSuccess, type Option } from '@constants'
import { Singleton } from '@providers'
import { Request as ExpressRequest } from 'express'
import {
  // Body,
  Controller,
  // Delete,
  Get,
  // Path,
  // Post,
  // Put,
  Query,
  Request,
  Route,
  Security,
  Tags
} from 'tsoa'

@Tags('Warehouser')
@Route('warehouser')
@Security('authorization')
export class WarehouserController extends Controller {
  @Get('search')
  public async SearchWarehouser(
    @Request() req: ExpressRequest,
    @Query() keyword: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getWarehouserInstance().searchWarehouser(
        keyword
      )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('warehouser')
  public async getWarehouser(
    @Request() req: ExpressRequest,
    @Query() _id: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getWarehouserInstance().getWarehouser(_id)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('list/warehouser')
  public async getListWarehouser(
    @Request() req: ExpressRequest,
    @Query() page: number = 1,
    @Query() limit: number = 10
  ): Promise<Option<any>> {
    try {
      const { data, total } =
        await Singleton.getWarehouserInstance().getListWarehouser(page, limit)
      return onSuccess(data, total)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
