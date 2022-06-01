import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { MessageI } from '@constants/Types';
import CustomText from '@components/custom/CustomText';
import ProfileIcon from '@icons/ic_profile_black.svg';
import { FontFamily, ButtonStyleType, ButtonSizeType } from '@constants/Types';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import StatusWithIcon from '@components/custom/StatusWithIcon';
import { formatToHour } from '@services/Helper';
import RoundView from '@components/custom/RoundView';

type MessageItemProps = {
    message: MessageI;
    onPressDetail: (message: MessageI) => void;
};

const MessageItem: React.FC<MessageItemProps> = ({
    message,
    onPressDetail,
}) => {
    return (
        <View
            style={[
                styles.container,
                { alignItems: message.isMe ? 'flex-end' : 'flex-start' },
            ]}>
            <View style={styles.messageContainer}>
                {message.isMe ? (
                    <View style={styles.statusContainer}>
                        <CustomText
                            family={FontFamily.REGULAR}
                            size={Variables.normalBorderRadius}
                            color={Colors.secondaryLightColor}>
                            {formatToHour(message.datetime)}
                        </CustomText>
                        {message.status ? (
                            <StatusWithIcon status={message.status} />
                        ) : null}
                    </View>
                ) : (
                    <RoundView
                        size={ButtonSizeType.NORMAL}
                        type={ButtonStyleType.ROUND}
                        color={Colors.secondaryLightestColor}
                        icon={<ProfileIcon />}
                    />
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
                                color={Colors.secondaryLightColor}
                                customStyle={styles.timeStyle}>
                                {formatToHour(message.datetime)}
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
        </View>
    );
};

export default MessageItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 5.5,
        marginTop: 5.5,
    },
    messageContainer: {
        width: 'auto',
        flexDirection: 'row',
    },
    infoContainer: {
        padding: 11,
        maxWidth: '80%',
        marginLeft: 5.5,
        borderRadius: Variables.regularBorderRadius,
    },
    statInfoContainer: {
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
    timeStyle: {
        marginLeft: 10,
    },
});
