import { FontFamily } from '@constants/Types';
import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

export type TypeProps = {
    size: number;
    family: FontFamily;
    color: string;
    customStyle?: StyleProp<TextStyle>;
    children: React.ReactNode;
};

const CustomText: React.FC<TypeProps> = ({
    children,
    size,
    color,
    family,
    customStyle,
}) => {
    return (
        <Text
            style={[
                customStyle,
                { fontSize: size, fontFamily: family, color: color },
            ]}>
            {children}
        </Text>
    );
};

export default CustomText;
