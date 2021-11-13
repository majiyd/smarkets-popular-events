import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../theme/colors';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  );
};
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loader;
