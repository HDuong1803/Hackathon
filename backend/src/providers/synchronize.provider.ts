import { Constant, logger } from '@constants'
import { vaccineSupplyChainContract, web3 } from '@providers'
import {
  Distributor,
  Process,
  Synchronize,
  VaccinatePerson,
  VaccinationStation,
  Warehouser
} from '@schemas'
import cron from 'node-cron'
import { EventData } from 'web3-eth-contract'

const globalVariable: any = global

globalVariable.isSyncingGetDataFromSmartContract = false
const onJobGetDataFromSmartContract = async () => {
  try {
    logger.info(
      'onJobGetDataFromSmartContract:' +
        globalVariable.isSyncingGetDataFromSmartContract
    )
    if (globalVariable.isSyncingGetDataFromSmartContract) return
    globalVariable.isSyncingGetDataFromSmartContract = true
    const lastSynchronize = await Synchronize.findOne()
      .sort({ last_block_number: -1 })
      .limit(1)
    const last_block_number = (lastSynchronize?.last_block_number || 0) + 1

    if (!lastSynchronize?.last_block_number) {
      await Synchronize.create({
        last_block_number: 33524081
      })
      globalVariable.isSyncingGetDataFromSmartContract = false
      return
    }
    const listTxHash: string[] = []
    const last_block_number_onchain = Math.min(
      await web3.eth.getBlockNumber(),
      last_block_number + 10000
    )
    logger.info(
      `Synchronizing from ${last_block_number} to ${last_block_number_onchain}`
    )
    await synchronizeVaccineSupplyChain(
      last_block_number,
      last_block_number_onchain,
      listTxHash
    )
    if (listTxHash.length > 0) {
      await Synchronize.create({
        last_block_number: last_block_number_onchain,
        transactions: listTxHash
      })
      logger.info(`Synchronized ${listTxHash.length} transactions`)
    } else {
      if (last_block_number_onchain - last_block_number > 500) {
        await Synchronize.create({
          last_block_number: last_block_number_onchain,
          transactions: []
        })
      }
    }
  } catch (error: any) {
    logger.error(`onJobGetDataFromSmartContract: ${error.message}`)
  }
  globalVariable.isSyncingGetDataFromSmartContract = false
}

const sortByTransactionIndex = (a: EventData, b: EventData) =>
  a.transactionIndex - b.transactionIndex

const synchronizeVaccineSupplyChain = async (
  last_block_number_sync: number,
  last_block_number_onchain: number,
  listTxHash: string[]
) => {
  const getPastEventsConfig = {
    fromBlock: last_block_number_sync,
    toBlock: last_block_number_onchain
  }
  const eventCompleteBasicDetail =
    await vaccineSupplyChainContract.getPastEvents(
      'CompleteBasicDetail',
      getPastEventsConfig
    )
  // logger.info(
  //   `Synchronizing ${eventCompleteBasicDetail.length} CompleteBasicDetail events`
  // )

  const eventCompleteWarehouser =
    await vaccineSupplyChainContract.getPastEvents(
      'CompleteWarehouser',
      getPastEventsConfig
    )
  // logger.info(
  //   `Synchronizing ${eventCompleteWarehouser.length} CompleteWarehouser events`
  // )

  const eventCompleteDistributor =
    await vaccineSupplyChainContract.getPastEvents(
      'CompleteDistributor',
      getPastEventsConfig
    )
  // logger.info(
  //   `Synchronizing ${eventCompleteDistributor.length} CompleteDistributor events`
  // )

  const eventCompleteVaccinationStation =
    await vaccineSupplyChainContract.getPastEvents(
      'CompleteVaccinationStation',
      getPastEventsConfig
    )
  // logger.info(
  //   `Synchronizing ${eventCompleteVaccinationStation.length} CompleteVaccinationStation events`
  // )

  const eventCompleteVaccinatePerson =
    await vaccineSupplyChainContract.getPastEvents(
      'CompleteVaccinatePerson',
      getPastEventsConfig
    )
  // logger.info(
  //   `Synchronizing ${eventCompleteVaccinatePerson.length} CompleteVaccinatePerson events`
  // )

  const listCompleteBasicDetail = eventCompleteBasicDetail
    .sort(sortByTransactionIndex)
    .map(e => ({
      user: e.returnValues['user'],
      batchNo: e.returnValues['batchNo'],
      transactionHash: e.transactionHash,
      blockNumber: e.blockNumber
    }))

  const listCompleteWarehouser = eventCompleteWarehouser
    .sort(sortByTransactionIndex)
    .map(e => ({
      user: e.returnValues['user'],
      batchNo: e.returnValues['batchNo'],
      transactionHash: e.transactionHash,
      blockNumber: e.blockNumber
    }))

  const listCompleteDistributor = eventCompleteDistributor
    .sort(sortByTransactionIndex)
    .map(e => ({
      user: e.returnValues['user'],
      batchNo: e.returnValues['batchNo'],
      transactionHash: e.transactionHash,
      blockNumber: e.blockNumber
    }))

  const listCompleteVaccinationStation = eventCompleteVaccinationStation
    .sort(sortByTransactionIndex)
    .map(e => ({
      user: e.returnValues['user'],
      batchNo: e.returnValues['batchNo'],
      transactionHash: e.transactionHash,
      blockNumber: e.blockNumber
    }))

  const listCompleteVaccinatePerson = eventCompleteVaccinatePerson
    .sort(sortByTransactionIndex)
    .map(e => ({
      user: e.returnValues['user'],
      batchNo: e.returnValues['batchNo'],
      transactionHash: e.transactionHash,
      blockNumber: e.blockNumber
    }))

  listTxHash.push(
    ...eventCompleteBasicDetail.map(e => e.returnValues['batchNo']),
    ...eventCompleteWarehouser.map(e => e.returnValues['batchNo']),
    ...eventCompleteDistributor.map(e => e.returnValues['batchNo']),
    ...eventCompleteVaccinationStation.map(e => e.returnValues['batchNo']),
    ...eventCompleteVaccinatePerson.map(e => e.returnValues['batchNo'])
  )

  for (const completeBasicDetail of listCompleteBasicDetail) {
    try {
      const dataBasicDetail = await vaccineSupplyChainContract.methods
        .getBasicDetailsData(completeBasicDetail.batchNo)
        .call()
      await Process.create({
        batchNo: completeBasicDetail.batchNo,
        producerName: dataBasicDetail.producerName,
        quantity: dataBasicDetail.quantity,
        optimumRangeTemp: dataBasicDetail.optimumRangeTemp,
        optimumRangeHum: dataBasicDetail.optimumRangeHum,
        nextAcction: Constant.NEXT_ACTION.WAREHOUSER
      })
    } catch (error: any) {
      logger.error(
        `Can not insert BasicDetails: ${completeBasicDetail.batchNo}, error: ${error.message}`
      )
    }
  }

  for (const completeWarehouser of listCompleteWarehouser) {
    try {
      const dataWarehouser = await vaccineSupplyChainContract.methods
        .getWarehouserData(completeWarehouser.batchNo)
        .call()
      await Warehouser.create({
        batchNo: completeWarehouser.batchNo,
        vaccineName: dataWarehouser.vaccineName,
        quantity: dataWarehouser.quantity,
        storageDate: dataWarehouser.storageDate,
        optimumRangeTemp: dataWarehouser.optimumRangeTemp,
        optimumRangeHum: dataWarehouser.optimumRangeHum,
        isViolation: dataWarehouser.isViolation,
        nextAcction: Constant.NEXT_ACTION.DISTRIBUTOR
      })
    } catch (error: any) {
      logger.error(
        `Can not update Warehouser: ${completeWarehouser.batchNo}, error: ${error.message}`
      )
    }
  }

  for (const completeDistributor of listCompleteDistributor) {
    try {
      const dataDistributor = await vaccineSupplyChainContract.methods
        .getDistributorData(completeDistributor.batchNo)
        .call()
      await Distributor.create({
        batchNo: completeDistributor.batchNo,
        destinationAddress: dataDistributor.destinationAddress,
        shippingName: dataDistributor.shippingName,
        quantity: dataDistributor.quantity,
        departureDateTime: dataDistributor.departureDateTime,
        estimateDateTime: dataDistributor.estimateDateTime,
        optimumRangeTemp: dataDistributor.optimumRangeTemp,
        optimumRangeHum: dataDistributor.optimumRangeHum,
        nextAcction: Constant.NEXT_ACTION.VACCINATION_STATION
      })
    } catch (error: any) {
      logger.error(
        `Can not update Distributor: ${completeDistributor.batchNo}, error: ${error.message}`
      )
    }
  }

  for (const completeVaccinationStation of listCompleteVaccinationStation) {
    try {
      const dataVaccinationStation = await vaccineSupplyChainContract.methods
        .getVaccinationStation(completeVaccinationStation.batchNo)
        .call()
      await VaccinationStation.create({
        batchNo: completeVaccinationStation.batchNo,
        quantity: dataVaccinationStation.quantity,
        arrivalDateTime: dataVaccinationStation.arrivalDateTime,
        vaccinationStationId: dataVaccinationStation.vaccinationStationId,
        shippingName: dataVaccinationStation.shippingName,
        shippingNo: dataVaccinationStation.shippingNo,
        locationAddress: dataVaccinationStation.locationAddress,
        nextAcction: Constant.NEXT_ACTION.OBJECT_INJECTION
      })
    } catch (error: any) {
      logger.error(
        `Can not update VaccinationStation: ${completeVaccinationStation.batchNo}, error: ${error.message}`
      )
    }
  }

  for (const completeVaccinatePerson of listCompleteVaccinatePerson) {
    try {
      const dataVaccinatePerson = await vaccineSupplyChainContract.methods
        .getVaccinateData(completeVaccinatePerson.batchNo)
        .call()
      await VaccinatePerson.create({
        batchNo: completeVaccinatePerson.batchNo,
        personName: dataVaccinatePerson.personName,
        age: dataVaccinatePerson.age,
        identityCard: dataVaccinatePerson.identityCard,
        numberOfVaccinations: dataVaccinatePerson.numberOfVaccinations,
        vaccinationDate: dataVaccinatePerson.vaccinationDate,
        typeOfVaccine: dataVaccinatePerson.typeOfVaccine,
        phoneNumber: dataVaccinatePerson.phoneNumber,
        nextAcction: Constant.NEXT_ACTION.WAREHOUSER
      })
    } catch (error: any) {
      logger.error(
        `Can not update VaccinatePerson: ${completeVaccinatePerson.batchNo}, error: ${error.message}`
      )
    }
  }
}

const startSynchronizeDataFromSmartContract = () => {
  cron.schedule('*/6 * * * * * *', () => onJobGetDataFromSmartContract())
}

export { startSynchronizeDataFromSmartContract }
