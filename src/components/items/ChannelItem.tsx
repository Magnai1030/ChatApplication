import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText from '@components/custom/CustomText';
import { FontFamily, ChannelI } from '@constants/Types';
import StatusDot from '@components/custom/StatusDot';

type ChannelItemProps = {
    data: ChannelI;
    onPress: (channelId: ChannelI) => void;
};

const ChannelItem: React.FC<ChannelItemProps> = ({ data, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={() => onPress(data)}>
            <View style={styles.profileImageContainer}>
                <CustomText
                    family={FontFamily.SEMIBOLD}
                    size={Variables.mediumTextSize}
                    color={Colors.whiteColor}>
                    {data.title[0]}
                </CustomText>
            </View>
            <View style={styles.profileInfoContainer}>
                <View style={styles.infoContainer}>
                    <CustomText
                        family={FontFamily.SEMIBOLD}
                        size={Variables.mediumTextSize}
                        color={Colors.secondaryColor}>
                        {data.title}
                    </CustomText>
                    <CustomText
                        family={FontFamily.REGULAR}
                        size={Variables.lightTextSize}
                        color={Colors.secondaryLightColor}>
                        9:07am
                    </CustomText>
                </View>
                <View style={styles.infoContainer}>
                    <CustomText
                        family={FontFamily.REGULAR}
                        size={Variables.lightTextSize}
                        color={Colors.secondaryLightColor}>
                        Hi
                    </CustomText>
                    <StatusDot status={data.status} />
                </View>
            </View>
        </Pressable>
    );
};

export default ChannelItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 66,
        marginTop: 11,
        marginBottom: 11,
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
        backgroundColor: Colors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileInfoContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
});
