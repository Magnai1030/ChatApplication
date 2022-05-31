import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ChannelI, MessageI, MessageStatus } from '@constants/Types';
import { gql, useQuery } from '@apollo/client';
import MessageItem from '@components/items/MessageItem';
import MessageModal from '@components/modals/MessageModal';

type ChatMessageProps = {
    channel: ChannelI;
};

const CHAPTERS_QUERY = gql`
    query GetMesssages($channelId: String!) {
        fetchLatestMessages(channelId: $channelId) {
            messageId
            text
            datetime
            userId
        }
    }
`;

const ChatMessage: React.FC<ChatMessageProps> = ({ channel }) => {
    const { data, error, loading } = useQuery(CHAPTERS_QUERY, {
        variables: { channelId: channel.channelId },
    });
    useEffect(() => {
        const { fetchLatestMessages } = data;
        if (fetchLatestMessages) {
            setMessageHistory(fetchLatestMessages);
        }
    }, [data]);

    const [messageHistory, setMessageHistory] = useState<MessageI[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<MessageI>();

    const onPressDetail = (message: MessageI) => {
        setSelectedMessage(message);
    };
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollstyle}>
                <View style={styles.scrollContainer}>
                    {messageHistory.map((element, index) => (
                        <MessageItem
                            key={index}
                            message={element}
                            onPressDetail={onPressDetail}
                        />
                    ))}
                </View>
            </ScrollView>
            <MessageModal
                selectedMessage={selectedMessage}
                setSelectedMessage={setSelectedMessage}
            />
        </View>
    );
};

export default ChatMessage;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    scrollstyle: {
        width: '100%',
        flex: 1,
    },
    scrollContainer: {
        width: '100%',
        padding: 16,
        flex: 1,
    },
});
