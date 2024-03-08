import { Constant } from "@constants"
import axios from "axios"

export const transactionDetail = async (txn: string) => {
    const response = await axios.get(
        `https://testnet.bscscan.com/api?module=proxy&action=eth_getTransactionReceipt&txhash=${txn}&apikey=${Constant.API_KEY}`
    )
    return response
}