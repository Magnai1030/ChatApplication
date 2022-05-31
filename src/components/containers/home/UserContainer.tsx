import React, { useContext, useState } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import ProfileIcon from '@icons/ic_profile.svg';
import MoreIcon from '@icons/ic_more.svg';
import CustomText from '@components/custom/CustomText';
import { FontFamily, UserI } from '@constants/Types';
import { UserContext, UserValue } from '@providers/User';

const UserContainer: React.FC = () => {
    const { selectedUser, userList, setSelectedUser } = useContext(
        UserContext,
    ) as UserValue;
    const [isExpand, setIsExpand] = useState<boolean>(false);

    const onPressUser = (user: UserI) => {
        setSelectedUser(user);
        setIsExpand(false);
    };
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.mainContainer}
                onPress={() => setIsExpand(!isExpand)}>
                <View style={styles.profileImageContainer}>
                    <ProfileIcon />
                </View>
                <View style={styles.profileInfoContainer}>
                    <View style={styles.infoContainer}>
                        <CustomText
                            family={FontFamily.SEMIBOLD}
                            size={Variables.mediumTextSize}
                            color={Colors.whiteColor}>
                            {selectedUser?.name}
                        </CustomText>
                        <CustomText
                            family={FontFamily.REGULAR}
                            size={Variables.lightTextSize}
                            color={Colors.whiteColor}>
                            3 Channel
                        </CustomText>
                    </View>
                    <View style={styles.buttonContainer}>
                        <MoreIcon />
                    </View>
                </View>
            </Pressable>
            {isExpand && userList.length > 0 ? (
                <View style={styles.listContainer}>
                    <View style={styles.listInnerContainer}>
                        {userList.map((element, index) => (
                            <Pressable
                                key={index}
                                style={styles.listStyle}
                                onPress={() => onPressUser(element)}>
                                <CustomText
                                    family={FontFamily.SEMIBOLD}
                                    size={Variables.mediumTextSize}
                                    color={Colors.whiteColor}>
                                    {element.name}
                                </CustomText>
                            </Pressable>
                        ))}
                    </View>
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
        paddingHorizontal: 24,
        borderBottomLeftRadius: Variables.boldBorderRadius,
        borderBottomRightRadius: Variables.boldBorderRadius,
    },
    listInnerContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: Colors.primaryLightColor,
        borderBottomLeftRadius: Variables.boldBorderRadius,
        borderBottomRightRadius: Variables.boldBorderRadius,
    },
    listStyle: {
        width: '100%',
        height: 66,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: Variables.boldBorderRadius,
    },
});
