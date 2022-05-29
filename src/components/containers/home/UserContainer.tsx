import React, { useState } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import ProfileIcon from '@icons/ic_profile.svg';
import MoreIcon from '@icons/ic_more.svg';
import CustomText from '@components/custom/CustomText';
import { FontFamily } from '@constants/Types';

const UserContainer: React.FC = () => {
    const [isExpand, setIsExpand] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.profileImageContainer}>
                    <ProfileIcon />
                </View>
                <View style={styles.profileInfoContainer}>
                    <View style={styles.infoContainer}>
                        <CustomText
                            family={FontFamily.SEMIBOLD}
                            size={Variables.mediumTextSize}
                            color={Colors.whiteColor}>
                            Joyse
                        </CustomText>
                        <CustomText
                            family={FontFamily.REGULAR}
                            size={Variables.lightTextSize}
                            color={Colors.whiteColor}>
                            3 Channel
                        </CustomText>
                    </View>
                    <Pressable
                        style={styles.buttonContainer}
                        onPress={() => setIsExpand(!isExpand)}>
                        <MoreIcon />
                    </Pressable>
                </View>
            </View>
            {isExpand ? (
                <View style={styles.listContainer}>
                    <Pressable style={styles.listStyle}></Pressable>
                </View>
            ) : null}
        </View>
    );
};

export default UserContainer;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 22,
    },
    mainContainer: {
        width: '100%',
        height: 66,
        borderRadius: Variables.boldBorderRadius,
        backgroundColor: Colors.primaryLightColor,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    profileImageContainer: {
        width: 56,
        height: 56,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfoContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Variables.mediumBorderRadius,
    },
    listContainer: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 8,
        borderBottomLeftRadius: Variables.boldBorderRadius,
        borderBottomRightRadius: Variables.boldBorderRadius,
    },
    listStyle: {
        width: '100%',
        height: 66,
        borderRadius: Variables.boldBorderRadius,
        backgroundColor: Colors.primaryLightColor,
    },
});
