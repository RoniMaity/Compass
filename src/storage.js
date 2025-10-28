import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerWebModule } from "expo";
const KEY = "TRAIL_COMPASS_PINS_V1";

// TODO: Load the saved pins
export async function loadPins() {
  try {
    const data = await AsyncStorage.getItem(KEY)
    // console.log("data at storage", data)
    if (!data) return [];
    // console.log("Hello  ",JSON.parse(data))
    return JSON.parse(data)
  } catch (e) {
    console.log(e);
    return [];
  }
}

// TODO: Save the pins locally
export async function savePins(pins) {
  // console.log(pins)
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(pins))
  } catch (e) {
    console.log(e)
  }
}
