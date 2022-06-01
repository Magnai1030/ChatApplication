import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, View } from 'react-native';
import CustomText from './CustomText';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import {
    FontFamily,
    ButtonStyleType,
    ButtonSizeType,
    buttonSizeTranslate,
    buttonRadiusTranslate,
} from '@constants/Types';

type RoundViewProps = {
    type: ButtonStyleType;
    size: ButtonSizeType;
    color?: string;
    titleColor?: string;
    title?: string;
    customStyle?: StyleProp<ViewStyle>;
    icon?: React.ReactNode;
};

const RoundView: React.FC<RoundViewProps> = ({
    type,
    size,
    title,
    color,
    titleColor,
    icon,
    customStyle,
}) => {
    const typeStyle = (type: ButtonStyleType) => {
        let style: StyleProp<ViewStyle> = {};
        if (type === ButtonStyleType.FULL) {
            style = {
                ...styles.fullContainer,
                height: buttonSizeTranslate[size],
                borderRadius: buttonRadiusTranslate[size],
            };
        } else if (type === ButtonStyleType.ROUND) {
            style = {
                ...styles.roundContainer,
                height: buttonSizeTranslate[size],
                width: buttonSizeTranslate[size],
                borderRadius: buttonRadiusTranslate[size],
            };
        }
        return style;
    };
    return (
        <View
            style={[customStyle, typeStyle(type), { backgroundColor: color }]}>
            {title && titleColor ? (
                <CustomText
                    color={titleColor}
                    family={FontFamily.MEDIUM}
                    size={Variables.regularTextSize}>
                    {title}
                </CustomText>
            ) : null}
            {icon}
        </View>
    );
};

const styles = StyleSheet.create({
    fullContainer: {
        width: '100%',
        backgroundColor: Colors.primaryColor,
        borderRadius: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    roundContainer: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RoundView;
