import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  Share,
} from 'react-native';
import RNShare from 'react-native-share';
import moment from 'moment';
import RNFS from 'react-native-fs';
import {isAndroid, isIOS } from '../Helper/ResponsiveFunctions';
export const errorMessage = (error: any) => {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  );
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const OpenWebsite = async (url: string) => {
  try {
    // Check if the URL has a protocol, add "https://" if missing
    const formattedUrl = url.match(/^https?:\/\//) ? url : `https://${url}`;

    const supported = await Linking.canOpenURL(formattedUrl);
    if (supported) {
      await Linking.openURL(formattedUrl);
    } else {
      isIOS
        ? console.log('Cannot handle this URL')
        : Linking.openURL(formattedUrl);
    }
  } catch (err: any) {
    console.log('Cannot handle this URL');
  }

};

export const OpenEmail = (email: string) => {
  const url = `mailto:${email}`;

  Linking.openURL(url).catch((err) =>
    console.error('An error occurred while opening email:', err)
  );
};

export const shareLink = async (link: string) => {
  try {
    const result = await Share.share({
      message: link,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('Shared with activity type:', result.activityType);
      } else {
        console.log('Shared successfully');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Share dismissed');
    }
    return result.activityType;
  } catch (error) {
    console.error('Error sharing content:', error);
    return null;
  }
};

export const shareLinkWithName = async (name: string, link: string) => {
  try {
    const result = await Share.share({
      message: `${name}\n${link}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('Shared with activity type:', result.activityType);
      } else {
        console.log('Shared successfully');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Share dismissed');
    }
    return result.activityType;
  } catch (error) {
    console.log('Error sharing content:', error);
    return null;
  }
};

export const shareVideoWithText = async (
  videoPath: string,
  title: string,
  message: string,
  link: string
) => {

  const options = {
    title,
    message: `${title}\n${message}\n${link}`,
    url: `file://${videoPath}`,
    type: 'video/mp4',
  };
  try {
    if (isAndroid) {
      const result = await RNShare.open(options);
      return result.success;
    } else {
      const result = await Share.share(options);
      console.log('Share result:', !!result.activityType);
      return !!result.activityType;
    }
  } catch (error: any) {
    if (error && error.message !== 'User did not share') {
      console.log('Share failed:', error);
    } else {
      console.log('Share cancelled by user.');
    }
    return false;
  }
};

export const shareLinkAndText = async (link: string, title: string) => {
  const options = {
    title: '',
    url: link,
    message: title + '\n',
  };

  try {
    const result = await RNShare.open(options);
    console.log('Image Share Result:', result);
  } catch (error) {
    console.error('Error sharing image:', error);
  }
};

export const shareImage = async (image: string, message?: string) => {
  const options = {
    title: 'Share Image',
    url: image,
    message: message,
  };

  try {
    const result = await RNShare.open(options);
    console.log('Image Share Result:', result);
  } catch (error) {
    console.log('Error sharing image:', error);
  }
};

export const shareContent = async (message: string, link: string) => {
  try {
    const result = await Share.share({
      message: message, // Text
      url: link,
    });
    if (result.action === Share.sharedAction) {
      console.log('Content shared successfully');
    }
  } catch (error) {
    console.error('Error sharing content: ', error);
  }
};

export const showAlert = (
  title: string,
  message: string,
  settingsText = 'Open Settings',
  rejectText = 'Reject',
  onSettingsPress: () => void
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: settingsText,
        onPress: onSettingsPress,
        style: 'default',
      },
      {
        text: rejectText,
        style: 'destructive',
      },
    ],
    { cancelable: false }
  );
};


export function toFormattedDate(
  dateString: string,
  format: string
): string | any {
  if (!dateString) {return null;}

  const date = moment(dateString);

  if (!date.isValid()) {
    return null;
  }

  return date.format(format);
}

export function isImage(fileName: string) {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
  const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv'];

  const extension = fileName.split('.').pop()?.toLowerCase();

  if (extension) {
    if (imageExtensions.includes(extension)) {
      return true;
    } else if (videoExtensions.includes(extension)) {
      return false;
    }
  }
}

export const requestNotificationPermission = async () => {
  try {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        throw new Error('Notification permission not granted');
      }
    }
    return true; // Permission granted or not required
  } catch (error) {
    console.error('Permission Request Error:', error);
    return false; // Permission request failed
  }
};

export const downloadAndSharePdf = async (pdfUrl: string) => {
  const fileUrl = pdfUrl;
  const fileName: any = pdfUrl.split('/').pop();
  const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

  try {
    const downloadResult = await RNFS.downloadFile({
      fromUrl: fileUrl,
      toFile: filePath,
    }).promise;

    if (downloadResult.statusCode === 200) {
      await RNShare.open({
        title: 'Share PDF',
        url: `file://${filePath}`,
        type: 'application/pdf',
      });
    } else {
      Alert.alert('Error', 'Failed to download the file');
    }
  } catch (error) {}
};

