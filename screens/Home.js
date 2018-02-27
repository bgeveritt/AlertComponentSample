import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert
} from 'react-native'
import { connectAlert } from '../components/Alert';
import { externalAlert } from "../js/utils";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  localOnPress = () => {
    this.props.alertWithType('info', 'Local', 'Alert triggered locally');
  }

  externalOnPress = () => {
    externalAlert(this.props.alertWithType);
  }

 render() {
   return (
     <View style={styles.container}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.localOnPress}
       >
         <Text>Trigger Alert Locally</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         onPress={this.externalOnPress}
       >
         <Text>Trigger Alert Externally</Text>
       </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})
export default connectAlert(Home);

