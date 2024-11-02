import {View} from 'react-native';
import React from 'react';
import CatCard from '../../components/CatCard/CatCard';
import {fetchCats, fetchFavouritedCats} from '../../api/catApi';

const HomeScreen = () => {
  React.useEffect(() => {
    const fetchAndLogData = async () => {
      try {
        const result = await fetchCats(); // Call the imported async function
        console.log('Fetched Data:', result); // Log the data
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchAndLogData();
  }, []);

  return (
    <View className="flex-1 justify-around items-center">
      <CatCard />
      {/* <CatCard /> */}
    </View>
  );
};

export default HomeScreen;
