import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { MessageI } from '@constants/Types';
import CustomText from '@components/custom/CustomText';
import ProfileIcon from '@icons/ic_profile.svg';
import { FontFamily } from '@constants/Types';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import StatusWithIcon from '@components/custom/StatusWithIcon';

type MessageItemProps = {
    message: MessageI;
    onPressDetail: (message: MessageI) => void;
};

const MessageItem: React.FC<MessageItemProps> = ({
    message,
    onPressDetail,
}) => {
    return (
        <View style={styles.container}>
            {message.isMe ? (
                <View style={styles.statusContainer}>
                    <CustomText
                        family={FontFamily.REGULAR}
                        size={Variables.normalBorderRadius}
                        color={Colors.secondaryLightColor}>
                        {message.datetime}
                    </CustomText>
                    {message.status ? (
                        <StatusWithIcon status={message.status} />
                    ) : null}
                </View>
            ) : (
                <View style={styles.profileContainer}>
                    <ProfileIcon />
                </View>
            )}
            <Pressable
                disabled={!message.isMe}
                onLongPress={() => onPressDetail(message)}
                style={[
                    styles.infoContainer,
                    {
                        backgroundColor: message.isMe
                            ? Colors.primaryLightestColor
                            : Colors.secondaryLightestColor,
                    },
                ]}>
                {message.isMe ? null : (
                    <View style={styles.statInfoContainer}>
                        <CustomText
                            family={FontFamily.SEMIBOLD}
                            size={Variables.boldTextSize}
                            color={Colors.secondaryColor}>
                            {message.userId}
                        </CustomText>
                        <CustomText
                            family={FontFamily.REGULAR}
                            size={Variables.normalBorderRadius}
                            color={Colors.secondaryLightColor}>
                            {message.datetime}
                        </CustomText>
                    </View>
                )}
                <CustomText
                    family={FontFamily.REGULAR}
                    size={Variables.normalBorderRadius}
                    color={Colors.secondaryColor}>
                    {message.text}
                </CustomText>
            </Pressable>
        </View>
    );
};

export default MessageItem;

const styles = StyleSheet.create({
    container: {
        marginBottom: 5.5,
        flexDirection: 'row',
        marginTop: 5.5,
    },
    infoContainer: {
        padding: 11,
        flex: 1,
        marginLeft: 5.5,
        borderRadius: Variables.regularBorderRadius,
    },
    statInfoContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statusContainer: {
        height: 'auto',
        width: 'auto',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    profileContainer: {
        width: 44,
        height: 44,
        borderRadius: Variables.normalBorderRadius,
        backgroundColor: Colors.secondaryLightestColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
