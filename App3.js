import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


 function LoginScreen({navigation}) {
  return (
    <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
     }}>
      {/*<Text style={styles.text}>Login Screen</Text>*/}
      <Button
          icon={{    name: "arrow-right",    size: 35,    color: "white"  }}
        title="StartGame"

        onPress={() => navigation.navigate('Play')}
      />
    </View>
  );
  }
  function PlayScreen({navigation}) {

      let [state, setState] = React.useState(state);
      state = {
          count: 0,
          top: randomNumber(0,700),
          left: randomNumber(-190,90),
      }
      const onPress = () => {
          setState({
              count: state.count + 1,
              top: randomNumber(0,700),
              left: randomNumber(-190,90),
          });
      }
    return (
        <View style={styles.buttonContainer} >
            <View style={{position: 'absolute',
                flex: 1,
                height: 80,
                width: 80,
                margin: 10,
                top: state.top,
                left: state.left,
                zIndex: 999,
                // right:this.state.right,
                // bottom:this.state.bottom,
            }}>
                <Button title="TESTE" onPress={onPress()} />
            </View>
        </View>
    );
  }
  function GameOverScreen({navigation}) {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
       }}>
        <Text style={styles.text}>Game Over</Text>
        <Button
          icon={{    name: "arrow-left",    size: 35,    color: "white"  }}
          title="Back"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    );
  }

  const Stack = createStackNavigator();



  export default function App3() {



    return (
      <NavigationContainer>
        <Stack.Navigator initalRouteName="Login">
          <Stack.Screen name=" " component={LoginScreen} />
          <Stack.Screen name="Play" component={PlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
      fontSize: 50,
  },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },

});