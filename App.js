import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';
import Colors from './theme/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={'light-content'} />

      <View>
        <Text>Hi</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});

export default App;
