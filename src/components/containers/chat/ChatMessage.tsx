import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ChannelI, MessageI, MessageStatus } from '@constants/Types';
import MessageItem from '@components/items/MessageItem';
import MessageModal from '@components/modals/MessageModal';

type ChatMessageProps = {
    channel: ChannelI;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ channel }) => {
    const [messageHistory, setMessageHistory] = useState<MessageI[]>([
        {
            messageId: '21',
            text: 'ssadds sda sd ds saddsasdasdasdads ds sd dsasdasdsd sd s dsadsad sd sad s ds d sddsa  sda',
            datetime: 'strin',
            userId: 'Sam',
            isMe: false,
        },
        {
            messageId: '21',
            text: 'ssadds sda sd ds saddsasdasdasdads ds sd dsasdasdsd sd s dsadsad sd sad s ds d sddsa  sda',
            datetime: 'strin',
            userId: 'Sam',
            isMe: false,
        },
        {
            messageId: '21',
            text: 'ssadds sda sd ds saddsasdasdasdads ds sd dsasdasdsd sd s dsadsad sd sad s ds d sddsa  sda',
            datetime: 'strin',
            userId: 'Loca',
            isMe: true,
            status: MessageStatus.NEW,
        },
        {
            messageId: '21',
            text: 'ssadds sda sd ds saddsasdasdasdads ds sd dsasdasdsd sd s dsadsad sd sad s ds d sddsa  sda',
            datetime: 'strin',
            userId: 'Sam',
            isMe: false,
        },
        {
            messageId: '21',
            text: 'ssadds',
            datetime: 'strin',
            userId: 'Sam',
            isMe: false,
        },
    ]);
    const [selectedMessage, setSelectedMessage] = useState<MessageI>();

    const onPressDetail = (message: MessageI) => {
        setSelectedMessage(message);
    };
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollstyle}
                contentContainerStyle={styles.scrollContainer}>
                {messageHistory.map((element, index) => (
                    <MessageItem
                        key={index}
                        message={element}
                        onPressDetail={onPressDetail}
                    />
                ))}
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
