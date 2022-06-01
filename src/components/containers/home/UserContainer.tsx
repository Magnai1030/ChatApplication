import React, { useContext, useState } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import ProfileIcon from '@icons/ic_profile.svg';
import MoreIcon from '@icons/ic_more.svg';
import CustomText from '@components/custom/CustomText';
import {
    FontFamily,
    UserI,
    ButtonStyleType,
    ButtonSizeType,
} from '@constants/Types';
import { UserContext, UserValue } from '@providers/User';
import RoundView from '@components/custom/RoundView';

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
                <RoundView
                    size={ButtonSizeType.BIG}
                    type={ButtonStyleType.ROUND}
                    color={Colors.primaryColor}
                    icon={<ProfileIcon />}
                />
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
                            {userList.length} Users
                        </CustomText>
                    </View>
                    <RoundView
                        size={ButtonSizeType.BIG}
                        type={ButtonStyleType.ROUND}
                        icon={<MoreIcon />}
                    />
                </View>
            </Pressable>
            {isExpand && userList.length > 0 ? (
                <View style={styles.listContainer}>
                    <View style={styles.listInnerContainer}>
                        {userList.map((element, index) => (
                            <Pressable
                                key={index}
                                style={[
                                    styles.listStyle,
                                    {
                                        backgroundColor:
                                            selectedUser?.userId ===
                                            element.userId
                                                ? Colors.secondaryLightColor
                                                : undefined,
                                    },
                                ]}
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
    listContainer: {
        width: '100%',
        height: 'auto',
        padding: 16,
        borderRadius: Variables.boldBorderRadius,
    },
    listInnerContainer: {
        width: '100%',
        height: 'auto',
        padding: 8,
        backgroundColor: Colors.secondaryLightColor,
        borderRadius: Variables.boldBorderRadius,
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
