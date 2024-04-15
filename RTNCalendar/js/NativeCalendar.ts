import { TurboModule, TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  addEvent(title: string, description: string, dateStart: string, dateEnd: string, timeStart: string, timeEnd: string, location: string): Promise<boolean>;
  addEventAutomatic(title: string, description: string, dateStart: string, dateEnd: string, timeStart: string, timeEnd: string, location: string): Promise<boolean>;
}

export default TurboModuleRegistry.get<Spec>("RTNCalendar") as Spec | null;