import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import LeftIcon from '@icons/ic_arrow_left.svg';
import CustomText from '@components/custom/CustomText';
import {
    FontFamily,
    ChannelI,
    ButtonSizeType,
    ButtonStyleType,
} from '@constants/Types';
import { NavigationContext } from '@react-navigation/native';
import Button from '@components/custom/Button';
import { UserContext, UserValue } from '@providers/User';

type ChatHeaderProps = {
    channel: ChannelI;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ channel }) => {
    const navigation = useContext(NavigationContext);
    const { selectedUser } = useContext(UserContext) as UserValue;
    const onPressBack = () => {
        navigation?.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Button
                    color={Colors.primaryColor}
                    onPress={() => onPressBack()}
                    type={ButtonStyleType.ROUND}
                    size={ButtonSizeType.BIG}
                    customStyle={styles.backButtonStyle}
                    icon={<LeftIcon />}
                />
                <View style={styles.profileInfoContainer}>
                    <CustomText
                        family={FontFamily.SEMIBOLD}
                        size={Variables.mediumTextSize}
                        color={Colors.secondaryColor}>
                        {channel.title}
                    </CustomText>
                    <CustomText
                        family={FontFamily.REGULAR}
                        size={Variables.lightTextSize}
                        color={Colors.secondaryColor}>
                        {channel.memberCount} members
                    </CustomText>
                </View>
                <View style={styles.profileButtonStyle}>
                    <CustomText
                        family={FontFamily.SEMIBOLD}
                        size={Variables.regularTextSize}
                        color={Colors.whiteColor}>
                        {selectedUser?.name}
                    </CustomText>
                </View>
            </View>
        </View>
    );
};

export default ChatHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        paddingTop: 22,
        paddingBottom: 5.5,
    },
    mainContainer: {
        width: '100%',
        height: 66,
        borderRadius: Variables.boldBorderRadius,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    backButtonStyle: {
        position: 'absolute',
        left: 22,
    },
    profileButtonStyle: {
        position: 'absolute',
        right: 22,
        width: 'auto',
        paddingHorizontal: 22,
        height: 56,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
