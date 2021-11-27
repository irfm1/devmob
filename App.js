import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Play extends React.Component {


  state = {
    count: 0,
    top: randomNumber(0,700),
    left: randomNumber(-190,90),
    // right: randomNumber(-50,100),
    // bottom: randomNumber(-50,100),
  }

  increment = () => {
    this.setState({
      count: this.state.count + 2,
      top: randomNumber(0,700),
      left: randomNumber(-190,90),
      // right: randomNumber(-50,100),
      // bottom: randomNumber(-50,100),
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
      top: randomNumber(0,700),
      left: randomNumber(-190,90),
    })
  }
  reset = () => {
    this.setState({
      count: 0,
    })
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={{position:"absolute",width:1000,height:1500,backgroundColor: '#000'}} onTouchStart={this.decrement}>
          <Text style={styles.text}>Pontos: {this.state.count}</Text>
        </View>

        <View style={styles.buttonContainer} >
          <View style={{position: 'absolute',
            flex: 1,
            height: 80,
            width: 80,
            margin: 10,
            top:this.state.top,
            left:this.state.left,
            zIndex: 999,
            // right:this.state.right,
            // bottom:this.state.bottom,
          }}>
            <Button title={this.state.count.toString()} onPress={this.increment} />
          </View>
          {/*<View style={styles.button2}>*/}
          {/*  <Button title="-" onPress={this.decrement} />*/}
          {/*</View>*/}
          {/*<View style={styles.button2}>*/}
          {/*  <Button title="Reset" onPress={this.reset} />*/}
          {/*</View>*/}
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button1: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    margin: 10,
    borderRadius: 10,
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
  },
  text: {
    color: '#fff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: 50,
    marginTop: 20,

  }

});
