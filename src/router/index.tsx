import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Chat from '@screens/Chat';
const Stack = createNativeStackNavigator();

const StackRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChatScreen"
                component={Chat}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackRouter;
