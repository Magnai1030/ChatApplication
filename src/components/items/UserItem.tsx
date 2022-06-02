import React, { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText from '@components/custom/CustomText';
import { FontFamily, UserI } from '@constants/Types';
import Animated, {
    useSharedValue,
    withTiming,
    withDelay,
    useAnimatedStyle,
} from 'react-native-reanimated';

type UserItemProps = {
    data: UserI;
    selectedUser: string;
    index: number;
    onPressUser: (user: UserI) => void;
};

const UserItem: React.FC<UserItemProps> = ({
    data,
    selectedUser,
    index,
    onPressUser,
}) => {
    const itemPosX = useSharedValue(-Variables.deviceWidth);
    const opacityValue = useSharedValue(0);
    useEffect(() => {
        itemPosX.value = withDelay(index * 100, withTiming(0));
        opacityValue.value = withDelay(index * 100, withTiming(1));
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: itemPosX.value,
                },
            ],
        };
    });
    const opacityStyle = useAnimatedStyle(() => {
        return {
            opacity: opacityValue.value,
        };
    });
    return (
        <Animated.View style={[animatedStyle, opacityStyle]}>
            <Pressable
                style={[
                    styles.listStyle,
                    {
                        backgroundColor:
                            selectedUser === data.userId
                                ? Colors.secondaryLightColor
                                : undefined,
                    },
                ]}
                onPress={() => onPressUser(data)}>
                <CustomText
                    family={FontFamily.SEMIBOLD}
                    size={Variables.mediumTextSize}
                    color={Colors.whiteColor}>
                    {data.name}
                </CustomText>
            </Pressable>
        </Animated.View>
    );
};

export default UserItem;

const styles = StyleSheet.create({
    listStyle: {
        width: '100%',
        height: 66,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: Variables.boldBorderRadius,
    },
});
