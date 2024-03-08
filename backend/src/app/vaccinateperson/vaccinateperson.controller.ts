import { IVaccinatePerson } from '@app'
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

@Tags('VaccinatePerson')
@Route('vaccinatePerson')
@Security('authorization')
export class VaccinatePersonController extends Controller {
  @Post('create')
  public async createVaccinatePerson(
    @Request() req: ExpressRequest,
    @Body() payload: IVaccinatePerson
  ): Promise<Option<any>> {
    try {
      const result =
        await Singleton.getVaccinatePersonInstance().createVaccinatePerson(
          payload
        )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('search')
  public async SearchVaccinatePerson(
    @Request() req: ExpressRequest,
    @Query() keyword: string
  ): Promise<Option<any>> {
    try {
      const result =
        await Singleton.getVaccinatePersonInstance().searchVaccinatePerson(
          keyword
        )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('detail')
  public async getVaccinePerson(
    @Request() req: ExpressRequest,
    @Query() batchNo: string
  ): Promise<Option<any>> {
    try {
      const result =
        await Singleton.getVaccinatePersonInstance().getVaccinatePerson(batchNo)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('all')
  public async getListVaccinatePerson(
    @Request() req: ExpressRequest,
    @Query() page: number = 1,
    @Query() limit: number = 10
  ): Promise<Option<any>> {
    try {
      const { data, total } =
        await Singleton.getVaccinatePersonInstance().getListVaccinatePerson(
          page,
          limit
        )
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
      const result = await Singleton.getVaccinatePersonInstance().countSuccess()
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
      const result = await Singleton.getVaccinatePersonInstance().countUnSuccess()
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
