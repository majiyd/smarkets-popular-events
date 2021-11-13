import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import moment from 'moment';
import BaseText from './BaseText';
import Colors from '../theme/colors';
import {getStateColor} from '../utils';

const EventItem = ({item = {}, onPress}) => {
  const {name, start_datetime, state = ''} = item;
  return (
    <Pressable onPress={onPress} style={styles.item}>
      <BaseText>{name}</BaseText>
      <View style={styles.timeRow}>
        <BaseText style={styles.time}>
          {moment(start_datetime).format('hh:mm A')}
        </BaseText>
        <BaseText style={[styles.state, {color: getStateColor(state)}]}>
          {state}
        </BaseText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    backgroundColor: Colors.grey,
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
    color: Colors.neutral,
  },
  state: {
    fontSize: 10,
    marginTop: 15,
    textTransform: 'capitalize',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default EventItem;
