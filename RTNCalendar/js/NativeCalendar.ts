import { TurboModule, TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  addEvent(title: string, description: string, timeStart: string, timeEnd: string): Promise<boolean>;
}

export default TurboModuleRegistry.get<Spec>("RTNCalendar") as Spec | null;