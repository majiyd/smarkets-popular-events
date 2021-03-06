import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert, FlatList} from 'react-native';
import BaseText from '../components/BaseText';
import EventItem from '../components/EventItem';
import Loader from '../components/Loader';
import Colors from '../theme/colors';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getTopEvents();
  }, []);

  const getTopEvents = async () => {
    try {
      setLoading(true);

      const topEventsResponse = await fetch(
        'https://api.smarkets.com/v3/popular/event_ids/sport/football/',
      );

      const topEvents = await topEventsResponse.json();

      const eventsAsString = (topEvents?.popular_event_ids ?? []).join(',');

      const getEventInfo = await fetch(
        `https://api.smarkets.com/v3/events/${eventsAsString}/`,
      );

      const eventsJson = await getEventInfo.json();

      setEvents(eventsJson.events);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Failed to fetch top events');
    }
  };

  const onCardPress = item => {
    navigation.navigate('Event', {item});
  };
  return (
    <View style={styles.background}>
      <BaseText type="header" style={styles.headerText}>
        Top Events Today
      </BaseText>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.content}>
          <BaseText>
            Trade and bet on a variety of football betting markets
          </BaseText>
          <View style={styles.eventsContainer}>
            <FlatList
              data={events}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <EventItem item={item} onPress={() => onCardPress({item})} />
              )}
            />
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
    paddingHorizontal: 20,
  },
  headerText: {
    marginVertical: 20,
  },
  content: {
    flex: 1,
  },
  eventsContainer: {
    marginTop: 20,
    flex: 1,
  },
});
export default Home;
