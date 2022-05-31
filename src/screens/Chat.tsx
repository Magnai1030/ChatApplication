import React from 'react';
import Screen from '@components/custom/Screen';
import ChatHeader from '@components/containers/chat/ChatHeader';
import ChatFooter from '@components/containers/chat/ChatFooter';
import ChatMessage from '@components/containers/chat/ChatMessage';

import { NavigationProps } from '../router';

const Chat: React.FC<NavigationProps> = ({ route }) => {
    const { channel } = route.params;
    return (
        <Screen>
            <ChatHeader channel={channel} />
            <ChatMessage channel={channel} />
            <ChatFooter channel={channel} />
        </Screen>
    );
};

export default Chat;
