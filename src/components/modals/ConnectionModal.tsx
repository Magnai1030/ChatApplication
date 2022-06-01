import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from '@components/custom/CustomText';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { FontFamily } from '@constants/Types';
import ConnectionIcon from '@icons/ic_connection.svg';

type ConnectionProps = {
    isLoad: boolean;
};

const ConnectionModal: React.FC<ConnectionProps> = () => {
    return (
        <View style={styles.modalContainer}>
            <ConnectionIcon />
            <CustomText
                color={Colors.whiteColor}
                family={FontFamily.REGULAR}
                size={Variables.regularTextSize}
                customStyle={styles.descriptionStyle}>
                Please check your connection
            </CustomText>
        </View>
    );
};
const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        bottom: 56,
        left: 56,
        right: 56,
        height: 66,
        alignItems: 'center',
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: Colors.secondaryColor,
        borderRadius: Variables.boldBorderRadius,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    descriptionStyle: {
        textAlign: 'left',
        marginLeft: 22,
    },
});
export default ConnectionModal;
