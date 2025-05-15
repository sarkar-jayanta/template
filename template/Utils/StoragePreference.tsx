import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  REGISTRATIONTOKEN,
  SEEN_TOOLTIP,
  TOKEN,
  USER,
} from "../Constants/KeyConstant";

export const _retrieveData = async (key: any) => {
  const value = await AsyncStorage.getItem(key);
  try {
    if (value != null) {
      return value;
    }
  } catch (error) {}

  return value;
};

export const _storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};

export const _clearStorage = async () => {
  await AsyncStorage.removeItem(TOKEN);
  await AsyncStorage.removeItem(REGISTRATIONTOKEN);
  await AsyncStorage.removeItem(USER);
};
