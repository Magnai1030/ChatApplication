import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import SendIcon from '@icons/ic_send.svg';
import {
    ChannelI,
    MessageFromApi,
    ButtonStyleType,
    ButtonSizeType,
} from '@constants/Types';
import CustomInput from '@components/custom/CustomInput';
import { UserContext, UserValue } from '@providers/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonContext, CommonValue } from '@providers/Common';
import Button from '@components/custom/Button';

type ChatFooterProps = {
    channel: ChannelI;
    sendLoading: boolean;
    sendMessage: (message: MessageFromApi) => void;
};
const SAVEDMESSAGES = 'SAVEDMESSAGES';

const ChatFooter: React.FC<ChatFooterProps> = ({
    channel,
    sendLoading,
    sendMessage,
}) => {
    const { selectedUser } = useContext(UserContext) as UserValue;
    const { padding } = useContext(CommonContext) as CommonValue;

    const [messageText, setMessageText] = useState<string>('');

    useEffect(() => {
        const getData = async () => {
            const savedData: MessageFromApi[] = await getSavedMessages();
            if (messageText === '') {
                savedData.forEach(element => {
                    if (
                        element.text !== '' &&
                        element.channelId === channel.channelId &&
                        element.userId == selectedUser?.userId
                    ) {
                        setMessageText(element.text);
                    }
                });
            }
        };
        getData();
    }, []);

    const manageData = async (text: string) => {
        if (text !== '') {
            const savedData = await getSavedMessages();
            let isPushed = false;
            const currentData: MessageFromApi = {
                text: text,
                channelId: channel.channelId,
                userId: selectedUser?.userId as string,
            };
            savedData.forEach(element => {
                if (
                    element.channelId === currentData.channelId &&
                    element.userId == currentData.userId
                ) {
                    element.text = currentData.text;
                    isPushed = true;
                }
            });
            if (!isPushed) {
                savedData.push(currentData);
            }
            setMessageSave(savedData);
        }
    };

    const onChangeText = (text: string) => {
        const data = JSON.parse(JSON.stringify(text));
        setMessageText(data);
        manageData(data);
    };

    const onPressSend = () => {
        Keyboard.dismiss();
        sendMessage({
            channelId: channel.channelId,
            text: messageText,
            userId: selectedUser?.userId as string,
        });
        setMessageText('');
    };

    const getSavedMessages = async () => {
        const response = await AsyncStorage.getItem(SAVEDMESSAGES);
        return response ? (JSON.parse(response) as MessageFromApi[]) : [];
    };

    const setMessageSave = async (saveData: MessageFromApi[]) => {
        const jsonVal = JSON.stringify(saveData);
        await AsyncStorage.setItem(SAVEDMESSAGES, jsonVal);
    };

    const isButtonDisabled = () => {
        let isDisabled = false;
        if (messageText === '') {
            isDisabled = true;
        }
        return isDisabled;
    };
    return (
        <View style={[styles.container, { paddingBottom: padding }]}>
            <View style={styles.subContainer}>
                <CustomInput
                    value={messageText}
                    placeholder="Write message ..."
                    onChange={onChangeText}
                    onSubmitEditing={() => onPressSend()}
                />
                <Button
                    color={Colors.infoColor}
                    disabled={sendLoading || isButtonDisabled()}
                    loading={sendLoading}
                    onPress={() => onPressSend()}
                    type={ButtonStyleType.ROUND}
                    titleColor={Colors.whiteColor}
                    size={ButtonSizeType.NORMAL}
                    icon={<SendIcon />}
                />
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
});
