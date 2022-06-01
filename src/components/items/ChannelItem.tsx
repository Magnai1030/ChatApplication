import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText from '@components/custom/CustomText';
import {
    FontFamily,
    ChannelI,
    ButtonStyleType,
    ButtonSizeType,
} from '@constants/Types';
import RoundView from '@components/custom/RoundView';

type ChannelItemProps = {
    data: ChannelI;
    onPress: (channelId: ChannelI) => void;
};

const ChannelItem: React.FC<ChannelItemProps> = ({ data, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={() => onPress(data)}>
            <RoundView
                size={ButtonSizeType.BIG}
                type={ButtonStyleType.ROUND}
                color={Colors.secondaryColor}
                titleColor={Colors.whiteColor}
                title={data.title[0]}
            />
            <View style={styles.profileInfoContainer}>
                <CustomText
                    family={FontFamily.SEMIBOLD}
                    size={Variables.mediumTextSize}
                    color={Colors.secondaryColor}>
                    {data.title}
                </CustomText>
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
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    profileInfoContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
});
