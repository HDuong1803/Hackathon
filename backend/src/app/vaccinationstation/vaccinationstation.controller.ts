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

@Tags('VaccinationStation')
@Route('vaccinationStation')
@Security('authorization')
export class VaccinationStationController extends Controller {
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

  @Get('vaccination-station')
  public async getVaccinationStation(
    @Request() req: ExpressRequest,
    @Query() _id: string
  ): Promise<Option<any>> {
    try {
      const result =
        await Singleton.getVaccinationStationInstance().getVaccinationStation(
          _id
        )
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('list/vaccination-station')
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
}
