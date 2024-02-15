import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import Splash from './Screens/onboard/Splash';


const Stack = createStackNavigator();

const App = () => {
    return(
        <><NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
                />

                </Stack.Navigator>
            </NavigationContainer></>

    )

}


export default App
