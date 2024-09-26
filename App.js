/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsScreen from './src/screens/ProductsScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <SafeAreaView style={{flex:1}}>
            <Stack.Navigator initialRouteName="Product">
              <Stack.Screen name="Products" component={ProductsScreen}/>
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;

// const styles = StyleSheet.create({})
