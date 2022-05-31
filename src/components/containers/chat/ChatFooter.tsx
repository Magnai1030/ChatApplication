import React, { useState, useEffect } from 'react';
import { Pressable, View, StyleSheet, Keyboard } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import SendIcon from '@icons/ic_send.svg';
import { ChannelI } from '@constants/Types';
import CustomInput from '@components/custom/CustomInput';
import { gql, useMutation, useQuery } from '@apollo/client';

type ChatFooterProps = {
    channel: ChannelI;
};

const POST_MUTATION = gql`
    mutation postMessage(
        $channelId: String!
        $text: String!
        $userId: String!
    ) {
        postMessage(channelId: $channelId, text: $text, userId: $userId) {
            messageId
            text
            userId
        }
    }
`;

const ChatFooter: React.FC<ChatFooterProps> = ({ channel }) => {
    const [postMessage, { data, loading, error }] = useMutation(POST_MUTATION);
    useEffect(() => {
        console.log(data, error);
    }, [data, error]);
    const [paddingBottom, setPaddingBottom] = useState<number>(0);
    const [searchText, setSearchText] = useState<string>('');
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardWillShow',
            event => {
                setPaddingBottom(event.endCoordinates.height - 29);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardWillHide',
            () => {
                setPaddingBottom(0);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    const onPressSend = async () => {
        postMessage({
            variables: { channelId: '1', text: searchText, userId: 'Sam' },
        });
    };
    return (
        <View style={[styles.container, { paddingBottom: paddingBottom }]}>
            <View style={styles.subContainer}>
                <CustomInput
                    value={searchText}
                    placeholder="Write message ..."
                    onChange={text => setSearchText(text)}
                    onSubmitEditing={() => Keyboard.dismiss()}
                />
                <Pressable
                    style={styles.buttonContainer}
                    onPress={() => onPressSend()}>
                    <SendIcon />
                </Pressable>
            </View>
        </View>
    );
};

export default ChatFooter;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 5.5,
    },
    subContainer: {
        width: '100%',
        height: 56,
        paddingLeft: 6,
        paddingRight: 6,
        flexDirection: 'row',
        borderRadius: Variables.regularBorderRadius,
        backgroundColor: Colors.primaryLightestColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: 44,
        height: 44,
        borderRadius: Variables.normalBorderRadius,
        backgroundColor: Colors.infoColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
