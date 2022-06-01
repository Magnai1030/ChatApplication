import React, { useEffect, useState } from 'react';
import UserContainer from '@components/containers/home/UserContainer';
import ChannelContainer from '@components/containers/home/ChannelContainer';
import Screen from '@components/custom/Screen';
import { ChannelI } from '@constants/Types';
import Variables from '@constants/Variables';

const Home: React.FC = () => {
    const [channelData, setChannelData] = useState<ChannelI[]>([]);

    useEffect(() => {
        setChannelData(Variables.channelList as ChannelI[]);
    }, []);
    return (
        <Screen>
            <UserContainer />
            <ChannelContainer data={channelData} />
        </Screen>
    );
};

export default Home;
