import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Clipboard } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { MessageI } from '@constants/Types';
import { ButtonStyleType, ButtonSizeType } from '@constants/Types';
import Button from '@components/custom/Button';

type MessageModalProps = {
    selectedMessage: MessageI | undefined;
    setSelectedMessage: (message: MessageI | undefined) => void;
    onPressResend: (message: MessageI) => void;
};

const MessageModal: React.FC<MessageModalProps> = ({
    selectedMessage,
    setSelectedMessage,
    onPressResend,
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

    const onPressCopy = () => {
        Clipboard.setString(selectedMessage?.text as string);
        setSelectedMessage(undefined);
    };

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
                    {selectedMessage ? (
                        <Button
                            color={Colors.whiteColor}
                            titleColor={Colors.infoColor}
                            onPress={() => onPressResend(selectedMessage)}
                            type={ButtonStyleType.FULL}
                            size={ButtonSizeType.BIG}
                            title={'Resend'}
                        />
                    ) : null}
                    <Button
                        color={Colors.whiteColor}
                        titleColor={Colors.secondaryColor}
                        onPress={() => onPressCopy()}
                        type={ButtonStyleType.FULL}
                        size={ButtonSizeType.BIG}
                        title={'Copy'}
                    />
                    <Button
                        color={Colors.errorColor}
                        titleColor={Colors.secondaryColor}
                        onPress={() => setSelectedMessage(undefined)}
                        type={ButtonStyleType.FULL}
                        size={ButtonSizeType.BIG}
                        title={'Cancel'}
                        customStyle={{ marginTop: 30 }}
                    />
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
});
export default MessageModal;
