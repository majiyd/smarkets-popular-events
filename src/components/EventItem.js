import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import moment from 'moment';
import BaseText from './BaseText';

const EventItem = ({item = {}, onPress}) => {
  const {name, start_datetime} = item;
  return (
    <Pressable onPress={onPress} style={styles.item}>
      <BaseText>{name}</BaseText>
      <BaseText style={styles.time}>
        {moment(start_datetime).format('lll')}
      </BaseText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    backgroundColor: '#242424',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  time: {
    fontSize: 10,
    marginTop: 15,
  },
});
export default EventItem;
