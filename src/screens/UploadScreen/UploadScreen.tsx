import React from 'react';
import {Button, Alert, PermissionsAndroid, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {postCat} from '../../api/catApi';
// import {API_KEY} from 'react-native-dotenv';

const UploadScreen = () => {
  // console.log('key', API_KEY);
  const [imageUri, setImageUri] = React.useState<string | undefined>(undefined);

  const handleOpenGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo', // Specify photo media type
    });

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorCode) {
      console.log('ImagePicker Error: ', result.errorMessage);
    } else if (result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0];
      console.log('called here');
      await postCat(selectedImage.uri); // Store the URI in state
    }
  };

  return <Button title="Open Gallery" onPress={() => {}} />;
};

export default UploadScreen;
