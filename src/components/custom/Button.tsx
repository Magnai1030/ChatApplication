import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    StyleProp,
    ViewStyle,
    ActivityIndicator,
} from 'react-native';
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

type ButtonProps = {
    type: ButtonStyleType;
    size: ButtonSizeType;
    color: string;
    titleColor?: string;
    title?: string;
    customStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    type,
    size,
    title,
    color,
    titleColor,
    icon,
    customStyle,
    loading,
    disabled,
    onPress,
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
        } else if (type === ButtonStyleType.AUTO) {
            style = {
                ...styles.autoContainer,
                height: buttonSizeTranslate[size],
                borderRadius: buttonRadiusTranslate[size],
            };
        }
        return style;
    };
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[
                customStyle,
                typeStyle(type),
                { opacity: disabled ? 0.5 : 1, backgroundColor: color },
            ]}
            disabled={disabled}
            onPress={onPress}>
            {loading ? (
                <ActivityIndicator size={'small'} color={titleColor} />
            ) : (
                <>
                    {title && titleColor ? (
                        <CustomText
                            color={titleColor}
                            family={FontFamily.MEDIUM}
                            size={Variables.regularTextSize}
                            customStyle={{ marginLeft: icon ? 10 : 0 }}>
                            {title}
                        </CustomText>
                    ) : null}
                    {icon}
                </>
            )}
        </TouchableOpacity>
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
    autoContainer: {
        width: 'auto',
        paddingHorizontal: 22,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Button;
