import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Register from './screens/Register';
import Splash from './screens/Splash';
import Welcome from './screens/Welcome';
import Verification from './screens/Verification';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';


const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
                <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Verification"
          component={Verification}
          />
          <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
                

                </Stack.Navigator>
            </NavigationContainer>

    )

}


export default App
