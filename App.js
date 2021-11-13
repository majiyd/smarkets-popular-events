import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from './src/theme/colors';
import Home from './src/screens/Home';
import EventScreen from './src/screens/Event';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />

      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: Colors.white,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Event" component={EventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.background,
  },
  headerText: {
    color: Colors.white,
  },
});

export default App;
