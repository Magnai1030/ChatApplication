import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';
import Colors from '@constants/Colors';
import { ChildrenProps } from '@constants/Types';

const Screen: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.subContainer}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.whiteColor,
    },
    subContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
    },
});

export default Screen;
