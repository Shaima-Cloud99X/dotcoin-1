import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Splash from './screens/Splash';
import Welcome from './screens/Welcome';
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
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
                

                </Stack.Navigator>
            </NavigationContainer>

    )

}


export default App
