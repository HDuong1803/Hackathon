import {
  DistributorService,
  GeneralService,
  ProcessService,
  TemperatureService,
  TimelineService,
  UserService,
  VaccinatePersonService,
  VaccinationStationService,
  WarehouserService
} from '@app'

class Singleton {
  private static userInstance: UserService
  private static productInstance: ProcessService
  private static distributorInstance: DistributorService
  private static vaccinatePersonInstance: VaccinatePersonService
  private static vaccinationStationInstance: VaccinationStationService
  private static warehouserInstance: WarehouserService
  private static generalInstance: GeneralService
  private static temperatureInstance: TemperatureService
  private static timelineInstance: TimelineService

  public static getUserInstance(): UserService {
    if (!Singleton.userInstance) {
      Singleton.userInstance = new UserService()
    }
    return Singleton.userInstance
  }

  public static getProcessInstance(): ProcessService {
    if (!Singleton.productInstance) {
      Singleton.productInstance = new ProcessService()
    }
    return Singleton.productInstance
  }

  public static getDistributorInstance(): DistributorService {
    if (!Singleton.distributorInstance) {
      Singleton.distributorInstance = new DistributorService()
    }
    return Singleton.distributorInstance
  }

  public static getVaccinatePersonInstance(): VaccinatePersonService {
    if (!Singleton.vaccinatePersonInstance) {
      Singleton.vaccinatePersonInstance = new VaccinatePersonService()
    }
    return Singleton.vaccinatePersonInstance
  }

  public static getVaccinationStationInstance(): VaccinationStationService {
    if (!Singleton.vaccinationStationInstance) {
      Singleton.vaccinationStationInstance = new VaccinationStationService()
    }
    return Singleton.vaccinationStationInstance
  }

  public static getWarehouserInstance(): WarehouserService {
    if (!Singleton.warehouserInstance) {
      Singleton.warehouserInstance = new WarehouserService()
    }
    return Singleton.warehouserInstance
  }

  public static getGeneralInstance(): GeneralService {
    if (!Singleton.generalInstance) {
      Singleton.generalInstance = new GeneralService()
    }
    return Singleton.generalInstance
  }

  public static getTemperatureInstance(): TemperatureService {
    if (!Singleton.temperatureInstance) {
      Singleton.temperatureInstance = new TemperatureService()
    }
    return Singleton.temperatureInstance
  }

  public static getTimelineInstance(): TimelineService {
    if (!Singleton.timelineInstance) {
      Singleton.timelineInstance = new TimelineService()
    }
    return Singleton.timelineInstance
  }
}

export { Singleton }
