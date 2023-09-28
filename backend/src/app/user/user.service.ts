import { OutputListUser } from '@app'
import { Constant } from '@constants'
import { User } from '@schemas'

class UserService {
  public async createUser(payload: any) {
    const {
      userAddress,
      name,
      contactNo,
      role,
      isActive,
      profileHash,
      from,
      to,
      status,
      transactionHash,
      blockHash,
      blockNumber,
      confirmations,
      byzantium,
      transactionIndex,
      contractAddress,
      ipfsLink
    } = payload
    const results = await User.create({
      userAddress,
      name,
      contactNo,
      role,
      isActive,
      profileHash,
      from,
      to,
      status: status === 1 ? 'SUCCESS' : 'UNSUCCESS',
      transactionHash,
      blockHash,
      blockNumber,
      confirmations,
      byzantium,
      transactionIndex,
      contractAddress,
      ipfsLink
    })

    return results
  }

  public async searchUser(keyword: string) {
    try {
      const result = await User.findOne({
        $or: [{ userAddress: { $regex: keyword, $options: 'i' } }]
      })

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

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

  public async getUserRole(): Promise<any> {
    return Constant.USERROLE
  }
}

export { UserService }
