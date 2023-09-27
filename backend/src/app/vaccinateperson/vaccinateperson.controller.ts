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

@Tags('VaccinatePerson')
@Route('vaccinatePerson')
@Security('authorization')
export class VaccinatePersonController extends Controller {
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

  @Get('vaccinate-person')
  public async getVaccinePerson(
    @Request() req: ExpressRequest,
    @Query() _id: string
  ): Promise<Option<any>> {
    try {
      const result =
        await Singleton.getVaccinatePersonInstance().getVaccinatePerson(_id)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('list/vaccinate-person')
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
}
