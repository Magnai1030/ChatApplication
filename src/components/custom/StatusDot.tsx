import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MessageStatus, messageStatusColor } from '@constants/Types';

type StatusDotProps = {
    status: MessageStatus;
};

const StatusDot: React.FC<StatusDotProps> = ({ status }) => {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: messageStatusColor[status] },
            ]}
        />
    );
};

export default StatusDot;

const styles = StyleSheet.create({
    container: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
});
