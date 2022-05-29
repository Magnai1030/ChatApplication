import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ChannelItem from '@components/items/ChannelItem';
import { ChannelI } from '@constants/Types';
import { NavigationContext } from '@react-navigation/native';

type ChannelContainerProps = {
    data: ChannelI[];
};

const ChannelContainer: React.FC<ChannelContainerProps> = ({ data }) => {
    const navigation = useContext(NavigationContext);
    const onPressChannel = (channel: ChannelI) => {
        navigation?.navigate('ChatScreen', { channel: channel });
    };
    return (
        <View style={styles.container}>
            {data.map((element, index) => (
                <ChannelItem
                    key={index}
                    data={element}
                    onPress={onPressChannel}
                />
            ))}
        </View>
    );
};

export default ChannelContainer;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 22,
    },
});
