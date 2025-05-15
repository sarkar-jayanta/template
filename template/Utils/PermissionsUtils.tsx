import { Platform, PermissionsAndroid, Linking } from "react-native";

type PermissionCallbacks = {
  onGranted: () => void;
  onDenied?: () => void;
  onPermanentlyDenied?: () => void;
};

const { RESULTS } = PermissionsAndroid;

export const requestPermission = async (
  permission: keyof typeof PermissionsAndroid.PERMISSIONS,
  callbacks: PermissionCallbacks
) => {
  const { onGranted, onDenied, onPermanentlyDenied } = callbacks;

  if (Platform.OS !== "android") {
    onGranted();
    return;
  }

  try {
    const alreadyGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS[permission]
    );

    if (alreadyGranted) {
      onGranted();
      return;
    }

    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS[permission]
    );

    switch (result) {
      case RESULTS.GRANTED:
        onGranted();
        break;

      case RESULTS.DENIED:
        onDenied?.();
        break;

      case RESULTS.NEVER_ASK_AGAIN:
        onPermanentlyDenied?.();
        Linking.openSettings();
        break;

      default:
        onDenied?.();
        break;
    }
  } catch (error) {
    console.warn("Permission request error:", error);
    onDenied?.();
  }
};
