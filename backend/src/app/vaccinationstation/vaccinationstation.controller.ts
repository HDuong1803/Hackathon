import { IVaccinationStation } from '@app'
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

@Tags('VaccinationStation')
@Route('vaccinationStation')
@Security('authorization')
export class VaccinationStationController extends Controller {
  @Post('create')
  public async createVaccinationStation(
    @Request() req: ExpressRequest,
    @Body() payload: IVaccinationStation
  ): Promise<Option<any>> {
    try {
      const result =
        await Singleton.getVaccinationStationInstance().createVaccinationStation(
          payload
        )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('search')
  public async SearchVaccinationStation(
    @Request() req: ExpressRequest,
    @Query() keyword: string
  ): Promise<Option<any>> {
    try {
      const result =
        await Singleton.getVaccinationStationInstance().searchVaccinationStation(
          keyword
        )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('detail')
  public async getVaccinationStation(
    @Request() req: ExpressRequest,
    @Query() batchNo: string
  ): Promise<Option<any>> {
    try {
      const result =
        await Singleton.getVaccinationStationInstance().getVaccinationStation(
          batchNo
        )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('all')
  public async getListVaccinationStation(
    @Request() req: ExpressRequest,
    @Query() page: number = 1,
    @Query() limit: number = 10
  ): Promise<Option<any>> {
    try {
      const { data, total } =
        await Singleton.getVaccinationStationInstance().getListVaccinationStation(
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
      const result = await Singleton.getVaccinationStationInstance().countSuccess()
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
      const result = await Singleton.getVaccinationStationInstance().countUnSuccess()
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
