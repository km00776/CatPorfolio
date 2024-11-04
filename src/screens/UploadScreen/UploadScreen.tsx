import React from 'react';
import {Alert, Button} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import useCats from '../../hooks/useCats';
import {requestGalleryPermission} from '../../util/permission';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const UploadScreen = () => {
  const {postCatImageMutation} = useCats();

  const handleOpenGallery = async () => {
    const hasPermission = await requestGalleryPermission();

    if (!hasPermission) {
      Alert.alert(
        'Permission denied',
        'Please allow gallery access to upload an image.',
      );
      return;
    }

    const result = await launchImageLibrary({
      mediaType: 'photo', // Specify photo media type
    });

    if (result.didCancel) {
      return;
    } else if (result.errorCode) {
      Alert.alert('Something went wrong picking an image');
    } else if (result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0];
      if (selectedImage.uri) {
        postCatImageMutation.mutate(selectedImage.uri, {
          onSuccess: () => {
            Alert.alert('Image has successfully been uploaded');
            // Optional: Update state or give user feedback
          },
          onError: () => {
            Alert.alert(
              'Upload Failed',
              'We were unable to upload your image. Please ensure you are uploading a valid image and try again.',
            );

            // Optional: Handle error feedback to user here
          },
        });
      }
    }
  };
  // need to update this
  if (postCatImageMutation.isPending) {
    return <LoadingSpinner />;
  }

  return <Button title="Open Gallery" onPress={() => handleOpenGallery()} />;
};

export default UploadScreen;
