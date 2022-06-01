import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client';
import SplashScreen from 'react-native-splash-screen';
import { Host } from 'react-native-portalize';
import Router from './src/router';
import client from '@constants/ApolloClient';

const App = () => {
    useEffect(() => {
        const start = async () => {
            SplashScreen.hide();
        };
        start();
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ApolloProvider client={client}>
                <NavigationContainer>
                    <Host>
                        <Router />
                    </Host>
                </NavigationContainer>
            </ApolloProvider>
        </GestureHandlerRootView>
    );
};
export default App;
