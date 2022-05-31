import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import UserContainer from '@components/containers/home/UserContainer';
import ChannelContainer from '@components/containers/home/ChannelContainer';
import Screen from '@components/custom/Screen';
import { ChannelI } from '@constants/Types';
import Variables from '@constants/Variables';

const Home: React.FC = () => {
    const [channelData, setChannelData] = useState<ChannelI[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setChannelData(Variables.channelList as ChannelI[]);
        }, 2000);
    }, []);
    return (
        <Screen>
            <View style={styles.container}>
                <UserContainer />
                <ChannelContainer data={channelData} />
            </View>
        </Screen>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
    },
});
