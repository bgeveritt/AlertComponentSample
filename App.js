import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from "react-navigation";
import { AlertProvider } from './components/Alert';
import Home from "./screens/Home";

const MainNavigator = StackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

class App extends Component {
  render() {
    return (
      <AlertProvider>
        <MainNavigator>
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor="#fff"
            barStyle="dark-content"
          />
        </View>
        </MainNavigator>
    </AlertProvider>
    );
  }
}
export default App;
