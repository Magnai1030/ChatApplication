import React, { useState, useContext } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import ProfileIcon from '@icons/ic_profile.svg';
import LeftIcon from '@icons/ic_arrow_left.svg';
import CustomText from '@components/custom/CustomText';
import { FontFamily, ChannelI } from '@constants/Types';
import { NavigationContext } from '@react-navigation/native';

type ChatHeaderProps = {
    channel: ChannelI;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ channel }) => {
    const navigation = useContext(NavigationContext);

    const [isExpand, setIsExpand] = useState<boolean>(false);
    const onPressBack = () => {
        navigation?.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Pressable
                    style={styles.buttonContainer}
                    onPress={() => onPressBack()}>
                    <LeftIcon />
                </Pressable>
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
                <Pressable
                    style={styles.buttonContainer}
                    onPress={() => setIsExpand(!isExpand)}>
                    <ProfileIcon />
                </Pressable>
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
        paddingLeft: 22,
        paddingRight: 22,
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
    buttonContainer: {
        width: 56,
        height: 56,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfoContainer: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
