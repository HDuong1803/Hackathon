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

@Tags('User')
@Route('user')
@Security('authorization')
export class UserController extends Controller {
  @Get('user')
  public async getUser(
    @Request() req: ExpressRequest,
    @Query() _id: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getUserInstance().getUser(_id)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('list/user')
  public async getListUser(
    @Request() req: ExpressRequest,
    @Query() page: number = 1,
    @Query() limit: number = 10
  ): Promise<Option<any>> {
    try {
      const { data, total } = await Singleton.getUserInstance().getListUser(
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
