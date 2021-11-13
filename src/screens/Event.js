import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Colors from '../theme/colors';
import moment from 'moment';
import BaseText from '../components/BaseText';
import Loader from '../components/Loader';

const Event = ({navigation, route}) => {
  const {short_name, start_datetime, state, name, parent_id} =
    route.params?.item?.item ?? {};

  const [loading, setLoading] = useState(false);
  const [parentInfo, setParentInfo] = useState([]);

  const {name: parentName} = parentInfo;

  useEffect(() => {
    getParentInfo();
    navigation.setOptions({headerTitle: short_name});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getParentInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.smarkets.com/v3/events/${parent_id}/`,
      );

      const parentObject = await response.json();

      console.log('parentObject', parentObject);

      setParentInfo(parentObject.events[0] || {});

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Failed to fetch event info');
    }
  };

  return (
    <View style={styles.background}>
      <BaseText type="header">{name}</BaseText>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <BaseText type="header">{parentName}</BaseText>
          <BaseText>Start: {moment(start_datetime).format('lll')}</BaseText>
          <BaseText>{state}</BaseText>
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
});
export default Event;
