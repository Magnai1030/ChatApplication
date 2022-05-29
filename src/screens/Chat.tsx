import React from 'react';
import Screen from '@components/custom/Screen';
import ChatHeader from '@components/containers/chat/ChatHeader';
import ChatFooter from '@components/containers/chat/ChatFooter';
import ChatMessage from '@components/containers/chat/ChatMessage';

import { NavigationProps } from '../router';

const Chat: React.FC<NavigationProps> = ({ route }) => {
    return (
        <Screen>
            <ChatHeader channel={route.params.channel} />
            <ChatMessage channel={route.params.channel} />
            <ChatFooter channel={route.params.channel} />
        </Screen>
    );
};

export default Chat;
