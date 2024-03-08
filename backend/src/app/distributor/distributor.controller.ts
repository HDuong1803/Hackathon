import { IDistributor } from '@app'
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

@Tags('Distributor')
@Route('distributor')
@Security('authorization')
export class DistributorController extends Controller {
  @Post('create')
  public async createDistributor(
    @Request() req: ExpressRequest,
    @Body() payload: IDistributor
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getDistributorInstance().createDistributor(
        payload
      )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('search')
  public async SearchDistributor(
    @Request() req: ExpressRequest,
    @Query() keyword: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getDistributorInstance().searchDistributor(
        keyword
      )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('detail')
  public async getDistributor(
    @Request() req: ExpressRequest,
    @Query() batchNo: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getDistributorInstance().getDistributor(
        batchNo
      )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('all')
  public async getListDistributor(
    @Request() req: ExpressRequest,
    @Query() page: number = 1,
    @Query() limit: number = 10
  ): Promise<Option<any>> {
    try {
      const { data, total } =
        await Singleton.getDistributorInstance().getListDistributor(page, limit)
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
      const result = await Singleton.getDistributorInstance().countSuccess()
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
      const result = await Singleton.getDistributorInstance().countUnSuccess()
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
