import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Register from './Screens/Register';
import Splash from './Screens/Splash';
import Welcome from './Screens/Welcome';
import Verification from './Screens/Verification';
import Login from './screens/Login';


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
                

                </Stack.Navigator>
            </NavigationContainer>

    )

}


export default App
