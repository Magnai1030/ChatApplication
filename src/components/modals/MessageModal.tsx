import React, { useRef, useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { MessageI } from '@constants/Types';
import CustomText from '@components/custom/CustomText';
import SendIcon from '@icons/ic_send.svg';
import { FontFamily } from '@constants/Types';

type MessageModalProps = {
    selectedMessage: MessageI | undefined;
    setSelectedMessage: (message: MessageI | undefined) => void;
};

const MessageModal: React.FC<MessageModalProps> = ({
    selectedMessage,
    setSelectedMessage,
}) => {
    const modalizeRef = useRef<Modalize>(null);

    useEffect(() => {
        if (modalizeRef.current) {
            if (selectedMessage) {
                modalizeRef.current.open();
            } else {
                modalizeRef.current.close();
            }
        }
    }, [selectedMessage]);

    return (
        <Portal>
            <Modalize
                ref={modalizeRef}
                onClosed={() => setSelectedMessage(undefined)}
                adjustToContentHeight={true}
                scrollViewProps={{
                    scrollEnabled: false,
                }}
                modalStyle={styles.modalStyle}
                overlayStyle={styles.modalOverLayStyle}>
                <View style={styles.container}>
                    <Pressable style={styles.buttonStyle}>
                        <CustomText
                            family={FontFamily.SEMIBOLD}
                            size={Variables.mediumTextSize}
                            color={Colors.infoColor}>
                            Resend
                        </CustomText>
                        <SendIcon color={Colors.infoColor} />
                    </Pressable>
                    <Pressable style={styles.buttonStyle}>
                        <CustomText
                            family={FontFamily.SEMIBOLD}
                            size={Variables.mediumTextSize}
                            color={Colors.secondaryColor}>
                            Copy
                        </CustomText>
                    </Pressable>
                    <Pressable
                        style={[
                            styles.buttonStyle,
                            {
                                marginTop: 30,
                                backgroundColor: Colors.errorColor,
                            },
                        ]}>
                        <CustomText
                            family={FontFamily.SEMIBOLD}
                            size={Variables.mediumTextSize}
                            color={Colors.whiteColor}>
                            Cancel
                        </CustomText>
                    </Pressable>
                </View>
            </Modalize>
        </Portal>
    );
};
const styles = StyleSheet.create({
    modalOverLayStyle: {
        backgroundColor: Colors.secondaryLightColor,
    },
    modalStyle: {
        borderTopLeftRadius: Variables.boldBorderRadius,
        borderTopRightRadius: Variables.boldBorderRadius,
    },
    container: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 34,
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24,
        borderTopLeftRadius: Variables.boldBorderRadius,
        borderTopRightRadius: Variables.boldBorderRadius,
    },
    buttonStyle: {
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Variables.mediumBorderRadius,
    },
});
export default MessageModal;
