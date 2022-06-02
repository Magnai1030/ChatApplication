import React, { useContext, useEffect, useState } from 'react';
import Screen from '@components/custom/Screen';
import ChatHeader from '@components/containers/chat/ChatHeader';
import ChatFooter from '@components/containers/chat/ChatFooter';
import ChatMessage from '@components/containers/chat/ChatMessage';

import { UserContext, UserValue } from '@providers/User';
import { NavigationProps } from '../router';
import useMessage from '@hooks/useMessage';
import { MessageFromApi, MessageI, MessageStatus } from '@constants/Types';
import { CommonContext, CommonValue } from '@providers/Common';
import { useGetMoreMessages } from '@hooks/useGetMoreMessages';

const Chat: React.FC<NavigationProps> = ({ route }) => {
    const { channel } = route.params;
    const { selectedUser } = useContext(UserContext) as UserValue;
    const { setErrorMessage } = useContext(CommonContext) as CommonValue;
    const [currentMessages, setCurrentMessages] = useState<MessageI[]>([]);

    const [
        result,
        loading,
        error,
        postMessage,
        sendData,
        sendLoading,
        sendError,
    ] = useMessage(selectedUser?.userId as string, channel.channelId);

    const [getMoreMessage, moreResult, moreLoading, moreError] =
        useGetMoreMessages(selectedUser?.userId as string);

    useEffect(() => {
        if (sendError) {
            setErrorMessage('Send Failed');
            changeFailedStatus();
        }
        if (moreError || error) {
            setErrorMessage('Sorry Got Error');
        }
    }, [error, sendError, moreError]);

    const changeFailedStatus = () => {
        const lastMessage: MessageI = JSON.parse(
            JSON.stringify(currentMessages[currentMessages.length - 1]),
        );
        if (
            lastMessage.status &&
            lastMessage.status === MessageStatus.LOADING
        ) {
            lastMessage.status = MessageStatus.FAILED;
            const tempMessages: MessageI[] = JSON.parse(
                JSON.stringify(currentMessages),
            );
            tempMessages.splice(tempMessages.length - 1, 1, lastMessage);
            setCurrentMessages(tempMessages);
        }
    };

    const sendMessage = (message: MessageFromApi) => {
        const tempData: MessageI = {
            messageId: `${currentMessages.length}`,
            text: message.text,
            datetime: String(new Date().toISOString()),
            userId: message.userId,
            status: MessageStatus.LOADING,
            isMe: true,
        };
        setCurrentMessages([...currentMessages, tempData]);
        postMessage({ variables: message });
    };

    useEffect(() => {
        if (moreResult && moreResult.length > 0) {
            setCurrentMessages([...moreResult, ...currentMessages]);
        }
    }, [moreResult]);

    const onPressMore = async () => {
        getMoreMessage({
            variables: {
                channelId: channel.channelId,
                messageId: currentMessages[0].messageId,
                old: true,
            },
        });
    };

    useEffect(() => {
        setCurrentMessages(result);
    }, [result]);

    const reSendMessage = (message: MessageI) => {
        const formatMessage: MessageFromApi = {
            ...message,
            channelId: channel.channelId,
        };
        postMessage({ variables: formatMessage });
    };

    return (
        <Screen>
            <ChatHeader channel={channel} />
            <ChatMessage
                messages={currentMessages}
                loading={loading}
                moreLoading={moreLoading}
                onPressMore={onPressMore}
                reSendMessage={reSendMessage}
            />
            <ChatFooter
                channel={channel}
                sendLoading={sendLoading}
                sendMessage={sendMessage}
            />
        </Screen>
    );
};

export default Chat;
