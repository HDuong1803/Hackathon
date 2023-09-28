import { IProcess } from '@app'
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

@Tags('Process')
@Route('process')
@Security('authorization')
export class ProcessController extends Controller {
  @Post('create')
  public async createProcess(
    @Request() req: ExpressRequest,
    @Body() payload: IProcess
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getProcessInstance().createProcess(payload)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('search')
  public async searchProcess(
    @Request() req: ExpressRequest,
    @Query() keyword: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getProcessInstance().searchProcess(keyword)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('detail')
  public async getpDetail(
    @Request() req: ExpressRequest,
    @Query() _id: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getProcessInstance().getProcessDetail(_id)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('all')
  public async getListProcess(
    @Request() req: ExpressRequest,
    @Query() page: number = 1,
    @Query() limit: number = 10
  ): Promise<Option<any>> {
    try {
      const { data, total } =
        await Singleton.getProcessInstance().getListProcess(page, limit)
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
      const result = await Singleton.getProcessInstance().countSuccess()
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
      const result = await Singleton.getProcessInstance().countUnSuccess()
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
