/**
 * @format
 */
import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { InitialProvider } from '@providers';

const Parent = () => {
    LogBox.ignoreAllLogs(true);
    return (
        <InitialProvider>
            <App />
        </InitialProvider>
    );
};

AppRegistry.registerComponent(appName, () => Parent);
