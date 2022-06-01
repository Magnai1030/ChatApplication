import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { MessageI, ButtonSizeType, ButtonStyleType } from '@constants/Types';
import MessageItem from '@components/items/MessageItem';
import MessageModal from '@components/modals/MessageModal';
import MessageSkeleton from '@components/skeletons/MessageSkeleton';
import Button from '@components/custom/Button';
import Colors from '@constants/Colors';
import RefreshIcon from '@icons/ic_refresh.svg';

type ChatMessageProps = {
    messages: MessageI[];
    loading: boolean;
    moreLoading: boolean;
    onPressMore: () => void;
    reSendMessage: (message: MessageI) => void;
};

const ChatMessage: React.FC<ChatMessageProps> = ({
    messages,
    loading,
    moreLoading,
    onPressMore,
    reSendMessage,
}) => {
    const scrollRef = useRef<ScrollView>(null);
    const [selectedMessage, setSelectedMessage] = useState<MessageI>();
    const [showMore, setShowMore] = useState<boolean>(false);

    const onPressDetail = (message: MessageI) => {
        setSelectedMessage(message);
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (event.nativeEvent.contentOffset.y < 5 && messages.length > 0) {
            setShowMore(true);
        } else {
            if (showMore) {
                setShowMore(false);
            }
        }
    };

    const onPressResend = (message: MessageI) => {
        reSendMessage(message);
        setSelectedMessage(undefined);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollstyle}
                onScroll={onScroll}
                ref={scrollRef}
                scrollEventThrottle={16}>
                {loading ? (
                    <View style={styles.scrollContainer}>
                        {[...Array(10)].map((element, index) => (
                            <MessageSkeleton
                                key={index}
                                isMe={index % 2 ? true : false}
                            />
                        ))}
                    </View>
                ) : (
                    <View style={styles.scrollContainer}>
                        {messages.map((element, index) => (
                            <MessageItem
                                key={index}
                                message={element}
                                onPressDetail={onPressDetail}
                            />
                        ))}
                    </View>
                )}
            </ScrollView>
            {showMore ? (
                <Button
                    type={ButtonStyleType.AUTO}
                    size={ButtonSizeType.NORMAL}
                    disabled={moreLoading}
                    loading={moreLoading}
                    onPress={onPressMore}
                    title={'More'}
                    color={Colors.infoColor}
                    titleColor={Colors.whiteColor}
                    icon={<RefreshIcon />}
                    customStyle={styles.moreButtonStyle}
                />
            ) : null}
            <MessageModal
                selectedMessage={selectedMessage}
                setSelectedMessage={setSelectedMessage}
                onPressResend={onPressResend}
            />
        </View>
    );
};

export default ChatMessage;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
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
    moreButtonStyle: {
        position: 'absolute',
        flexDirection: 'row-reverse',
        top: 0,
    },
});
