import React from 'react';
import {ActivityIndicator, Alert, Button} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import useCats from '../../hooks/useCats';
// import {API_KEY} from 'react-native-dotenv';

const UploadScreen = () => {
  // console.log('key', API_KEY);
  const {postCatImageMutation} = useCats();

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
      postCatImageMutation.mutate(selectedImage.uri, {
        onSuccess: () => {
          Alert.alert('Image has successfully been uploaded');
          // Optional: Update state or give user feedback
        },
        onError: () => {
          Alert.alert(
            'There has been error uploading your image, please try again later',
          );

          // Optional: Handle error feedback to user here
        },
      });
    }
  };
  // need to update this
  if (postCatImageMutation.isPending) {
    return <ActivityIndicator />;
  }

  return <Button title="Open Gallery" onPress={() => handleOpenGallery()} />;
};

export default UploadScreen;
