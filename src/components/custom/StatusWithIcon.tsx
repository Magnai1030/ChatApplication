import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    MessageStatus,
    messageStatusColor,
    messageStatusIcon,
} from '@constants/Types';

type StatusWithIconProps = {
    status: MessageStatus;
};

const StatusWithIcon: React.FC<StatusWithIconProps> = ({ status }) => {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: messageStatusColor[status] },
            ]}>
            {messageStatusIcon[status]}
        </View>
    );
};

export default StatusWithIcon;

const styles = StyleSheet.create({
    container: {
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
