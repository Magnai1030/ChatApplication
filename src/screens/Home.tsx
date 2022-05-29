import React, { useEffect, useState } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import UserContainer from '@components/containers/home/UserContainer';
import ChannelContainer from '@components/containers/home/ChannelContainer';
import Screen from '@components/custom/Screen';
import { ChannelI, MessageStatus } from '@constants/Types';

// const CHAPTERS_QUERY = gql`
//     query GetMessage($channelId: String!) {
//         fetchLatestMessages(channelId: $channelId) {
//             messageId
//             text
//             datetime
//             userId
//         }
//     }
// `;

const Home: React.FC = () => {
    const [channelData, setChannelData] = useState<ChannelI[]>([
        {
            channelId: '1',
            title: 'General',
            status: MessageStatus.NEW,
            memberCount: 3,
        },
        {
            channelId: '2',
            title: 'Technology',
            status: MessageStatus.FAILED,
            memberCount: 3,
        },
        {
            channelId: '3',
            title: 'LGBT Channel',
            status: MessageStatus.LOADING,
            memberCount: 3,
        },
    ]);
    // const { data, error, loading } = useQuery(CHAPTERS_QUERY, {
    //     variables: { channelId: '1' },
    // });
    // useEffect(() => {
    //     console.log(data, error);
    // }, [data, error]);
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
