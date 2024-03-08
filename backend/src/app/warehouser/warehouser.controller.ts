import { IWarehouser } from '@app'
import { logError, onError, onSuccess, type Option } from '@constants'
import { Singleton } from '@providers'
import { Request as ExpressRequest } from 'express'
import {
  Body,
  Controller,
  Get,
  Post,
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
  @Post('create')
  public async createWarehouser(
    @Request() req: ExpressRequest,
    @Body() payload: IWarehouser
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getWarehouserInstance().createWarehouser(
        payload
      )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

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

  @Get('detail')
  public async getWarehouser(
    @Request() req: ExpressRequest,
    @Query() batchNo: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getWarehouserInstance().getWarehouser(batchNo)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('all')
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

  @Get('countsuccess')
  public async countSuccess(
    @Request() req: ExpressRequest
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getWarehouserInstance().countSuccess()
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('countunsuccess')
  public async countUnSuccess(
    @Request() req: ExpressRequest
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getWarehouserInstance().countUnSuccess()
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
