import { IUser } from '@app'
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

@Tags('User')
@Route('user')
@Security('authorization')
export class UserController extends Controller {
  @Post('create')
  public async createUser(
    @Request() req: ExpressRequest,
    @Body() payload: IUser
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getUserInstance().createUser(payload)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('serch')
  public async searchUser(
    @Request() req: ExpressRequest,
    @Query() keyword: string
  ): Promise<Option<any>> {
    try {
      const result = await Singleton.getUserInstance().searchUser(keyword)
      return onSuccess(result)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }

  @Get('detail')
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

  @Get('all')
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

  @Get('role')
  public async getUserRole(
    @Request() req: ExpressRequest
  ): Promise<Option<any>> {
    try {
      const data = await Singleton.getUserInstance().getUserRole()
      return onSuccess(data)
    } catch (error: any) {
      logError(error, req)
      return onError(error, this)
    }
  }
}
