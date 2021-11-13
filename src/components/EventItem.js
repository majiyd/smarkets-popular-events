import React from 'react';
import {Text, Pressable} from 'react-native';

const EventItem = ({item = {}, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{item.id}</Text>
    </Pressable>
  );
};

export default EventItem;
