import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ChannelI } from '@constants/Types';

import Home from '@screens/Home';
import Chat from '@screens/Chat';
const Stack = createNativeStackNavigator();

type RootStackParamList = {
    // RegistrationScreen: { selectedRoute: number[] };
    Chat: { channel: ChannelI };
};

export type NavigationProps = NativeStackScreenProps<
    RootStackParamList,
    // 'RegistrationScreen',
    'Chat'
>;

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
