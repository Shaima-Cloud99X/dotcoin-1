import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Register from './Screens/Register';
import Splash from './Screens/Splash';
import Welcome from './Screens/Welcome';
import Verification from './Screens/Verification';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import ForgotPassword from './Screens/ForgotPassword';
import Home from './Screens/Home';
import Preferences from './Screens/Preferences';
import EditInfo from './Screens/EditInfo';
import InviteFriend from './Screens/InviteFriend';
import Main from './Screens/Main';


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
          options={{headerShown: false}}
          />
          <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Profile"
          component={Profile}
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
         <Stack.Screen
          name="Preferences"
          component={Preferences}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="EditInfo"
          component={EditInfo}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="InviteFriend"
          component={InviteFriend}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />

        
             
                

                </Stack.Navigator>
            </NavigationContainer>

    )

}


export default App
