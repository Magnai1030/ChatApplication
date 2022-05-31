import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

const lightTextSize = 14;
const regularTextSize = 16;
const mediumTextSize = 20;
const boldTextSize = 24;
const extraBoldTextSize = 32;

const boldBorderRadius = 24;
const mediumBorderRadius = 22;
const regularBorderRadius = 16;
const normalBorderRadius = 14;

const userList = [
    { name: 'Joyse', userId: 'Joyse' },
    { name: 'Sam', userId: 'Sam' },
    { name: 'Russell', userId: 'Russell' },
];

const channelList = [
    {
        channelId: '1',
        title: 'General',
        status: 'NEW',
        memberCount: 3,
    },
    {
        channelId: '2',
        title: 'Technology',
        status: 'FAILED',
        memberCount: 3,
    },
    {
        channelId: '3',
        title: 'LGBT Channel',
        status: 'LOADING',
        memberCount: 3,
    },
];

export default {
    //Constant

    platform,
    deviceWidth,
    deviceHeight,

    //Text sizes

    lightTextSize,
    regularTextSize,
    mediumTextSize,
    boldTextSize,
    extraBoldTextSize,

    //Border radius

    boldBorderRadius,
    mediumBorderRadius,
    regularBorderRadius,
    normalBorderRadius,

    // TempData,
    userList,
    channelList,
};
