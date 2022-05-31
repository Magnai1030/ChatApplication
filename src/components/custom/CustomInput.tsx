import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { FontFamily } from '@constants/Types';

type CustomInputProps = {
    value: string;
    placeholder?: string;
    onChange: (text: string) => void;
    onSubmitEditing: () => void;
};

const CustomInput: React.FC<CustomInputProps> = ({
    value,
    placeholder,
    onChange,
    onSubmitEditing,
}) => {
    return (
        <TextInput
            onChangeText={text => onChange(text)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Colors.secondaryLightColor}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={'send'}
            autoCorrect={false}
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 18,
        paddingRight: 18,
        fontFamily: FontFamily.REGULAR,
        borderRadius: Variables.regularBorderRadius,
        height: 44,
        color: Colors.secondaryColor,
        fontSize: Variables.regularTextSize,
    },
});

export default CustomInput;
