import { OutputListUser } from '@app'
import { User } from '@schemas'

class UserService {
  public async getUser(_id: string): Promise<any> {
    try {
      const data = await User.findById(_id)
      return data
    } catch (error: any) {
      throw new error(error.message)
    }
  }

  public async getListUser(
    page: number = 1,
    limit: number = 10
  ): Promise<OutputListUser> {
    const offset = (page - 1) * limit
    const items = await User.find().skip(offset).limit(limit)
    const totalItem = await User.countDocuments()

    return {
      data: items,
      total: totalItem
    }
  }
}

export { UserService }
