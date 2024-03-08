import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({path: __dirname + "/.env"})
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    bsctest: {
      url: `https://data-seed-prebsc-2-s2.binance.org:8545`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};

export default config;
