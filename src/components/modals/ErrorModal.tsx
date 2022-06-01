import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import CustomText from '@components/custom/CustomText';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { FontFamily } from '@constants/Types';
import ErrorIcon from '@icons/ic_error_round.svg';

type ErrorProps = {
    errorMessage: string | undefined;
    setErrorMessage: (message: string | undefined) => void;
};

const ErrorModal: React.FC<ErrorProps> = ({
    errorMessage,
    setErrorMessage,
}) => {
    return (
        <Pressable
            style={styles.modalContainer}
            onPress={() => setErrorMessage(undefined)}>
            <ErrorIcon />
            <CustomText
                color={Colors.whiteColor}
                family={FontFamily.REGULAR}
                size={Variables.regularTextSize}
                customStyle={styles.descriptionStyle}>
                {errorMessage}
            </CustomText>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        top: 56,
        left: 56,
        right: 56,
        height: 66,
        alignItems: 'center',
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: Colors.errorColor,
        borderRadius: Variables.boldBorderRadius,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    descriptionStyle: {
        textAlign: 'left',
        marginLeft: 22,
    },
});
export default ErrorModal;
