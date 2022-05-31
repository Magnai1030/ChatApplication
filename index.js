/**
 * @format
 */
import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { UserProvider } from '@providers';

const Parent = () => {
    LogBox.ignoreAllLogs(true);
    return (
        <UserProvider>
            <App />
        </UserProvider>
    );
};

AppRegistry.registerComponent(appName, () => Parent);
