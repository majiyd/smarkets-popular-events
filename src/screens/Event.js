import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Colors from '../theme/colors';
import moment from 'moment';
import BaseText from '../components/BaseText';
import Loader from '../components/Loader';
import {getStateColor} from '../utils';

const Event = ({navigation, route}) => {
  const {short_name, start_datetime, state, name, parent_id} =
    route.params?.item?.item ?? {};

  const [loading, setLoading] = useState(false);
  const [parentInfo, setParentInfo] = useState([]);

  const {name: parentName} = parentInfo;

  useEffect(() => {
    getParentInfo();
    navigation.setOptions({headerTitle: short_name});
  }, [getParentInfo, navigation, short_name]);

  const getParentInfo = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.smarkets.com/v3/events/${parent_id}/`,
      );

      const parentObject = await response.json();

      setParentInfo(parentObject.events[0] || {});

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Failed to fetch event info');
    }
  }, [parent_id]);

  return (
    <View style={styles.background}>
      <BaseText type="header">{name}</BaseText>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <BaseText style={styles.parent}>{parentName}</BaseText>
          <View style={styles.timeRow}>
            <BaseText style={styles.time}>
              {state === 'upcoming' ? 'Starts' : 'Started:'}{' '}
              {moment(start_datetime).format('MMM d, HH:MM A')}
            </BaseText>
            <BaseText style={[styles.state, {color: getStateColor(state)}]}>
              {state}
            </BaseText>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: 20,
  },
  parent: {
    marginTop: 15,
    marginBottom: 12,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  state: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  time: {
    fontSize: 14,
  },
});
export default Event;
