import { logError, onError, onSuccess, type Option } from '@constants'
import { Singleton } from '@providers'
import { Request as ExpressRequest } from 'express'
import {
  // Body,
  Controller,
  // Delete,
  Get,
  Post,
  // Path,
  // Post,
  // Put,
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
    @Query() batchNo: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getDistributorInstance().createDistributor(
        batchNo
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

  @Get('distributor')
  public async getDistributor(
    @Request() req: ExpressRequest,
    @Query() _id: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getDistributorInstance().getDistributor(
        _id
      )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('list/distributor')
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
}
