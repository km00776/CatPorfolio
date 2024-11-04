import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
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
      mediaType: 'photo',
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
          },
          onError: () => {
            Alert.alert(
              'Upload Failed',
              'We were unable to upload your image. Please ensure you are uploading a valid image and try again.',
            );
          },
        });
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      {postCatImageMutation.isPending ? (
        <LoadingSpinner />
      ) : (
        <TouchableOpacity
          onPress={handleOpenGallery}
          className="bg-orange-600 rounded-lg p-4">
          <Text className="text-white font-bold text-md">Upload Cat Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UploadScreen;
