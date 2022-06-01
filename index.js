/**
 * @format
 */
import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { UserProvider, CommonProvider } from '@providers';
import { useNetInfo } from '@react-native-community/netinfo';
import ConnectionModal from '@components/modals/ConnectionModal';

const Parent = () => {
    const netInfo = useNetInfo();
    LogBox.ignoreAllLogs(true);
    return (
        <CommonProvider>
            <UserProvider>
                <App />
                {netInfo.isConnected === false ? <ConnectionModal /> : null}
            </UserProvider>
        </CommonProvider>
    );
};

AppRegistry.registerComponent(appName, () => Parent);
