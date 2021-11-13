import React from 'react';
import {View, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Event')}>home</Text>
    </View>
  );
};

export default Home;
