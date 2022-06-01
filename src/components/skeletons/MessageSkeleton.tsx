import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type MessageSkeletonProps = {
    isMe: boolean;
};

const MessageSkeleton: React.FC<MessageSkeletonProps> = ({ isMe }) => {
    return (
        <View
            style={[
                styles.container,
                { justifyContent: isMe ? 'flex-end' : 'flex-start' },
            ]}>
            {isMe ? null : (
                <SkeletonPlaceholder
                    backgroundColor={Colors.secondaryLightestColor}>
                    <View style={styles.profileContainer} />
                </SkeletonPlaceholder>
            )}
            <SkeletonPlaceholder
                backgroundColor={Colors.secondaryLightestColor}>
                <View style={styles.infoContainer} />
            </SkeletonPlaceholder>
        </View>
    );
};

export default MessageSkeleton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 5.5,
        marginTop: 5.5,
    },
    infoContainer: {
        height: 75,
        width: 200,
        marginLeft: 5.5,
        borderRadius: Variables.regularBorderRadius,
    },
    statusContainer: {
        height: 'auto',
        width: 'auto',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    profileContainer: {
        width: 44,
        height: 44,
        borderRadius: Variables.normalBorderRadius,
    },
});
