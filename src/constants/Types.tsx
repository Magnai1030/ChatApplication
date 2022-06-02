import React from 'react';

import Colors from './Colors';
import CheckIcon from '@icons/ic_check.svg';
import LoadingIcon from '@icons/ic_loading.svg';

import ErrorIcon from '@icons/ic_error.svg';
import Variables from './Variables';

export type ChildrenProps = {
    children: React.ReactNode;
};

export enum FontFamily {
    REGULAR = 'NotoSans-Regular',
    LIGHT = 'NotoSans-Light',
    MEDIUM = 'NotoSans-Medium',
    SEMIBOLD = 'NotoSans-SemiBold',
}

export interface ChannelI {
    channelId: string;
    title: string;
    status: MessageStatus;
    memberCount: number;
}

export interface MessageI {
    messageId: string;
    text: string;
    datetime: string;
    userId: string;
    status?: MessageStatus;
    isMe: boolean;
}

export interface MessageFromApi {
    text: string;
    channelId: string;
    userId: string;
}

export enum MessageStatus {
    NEW = 'NEW',
    FAILED = 'FAILED',
    SUCCESS = 'SUCCESS',
    LOADING = 'LOADING',
}

export const messageStatusColor: { [key in MessageStatus]: string } = {
    NEW: Colors.infoColor,
    FAILED: Colors.errorColor,
    SUCCESS: Colors.successColor,
    LOADING: Colors.accentColor,
};

export const messageStatusIcon: { [key in MessageStatus]: React.ReactNode } = {
    NEW: <CheckIcon />,
    FAILED: <ErrorIcon />,
    SUCCESS: <CheckIcon />,
    LOADING: <LoadingIcon />,
};

export interface UserI {
    name: string;
    userId: string;
}

export enum ButtonStyleType {
    ROUND,
    FULL,
    AUTO,
}

export enum ButtonSizeType {
    BIG = 'BIG',
    NORMAL = 'NORMAL',
}

export const buttonSizeTranslate: { [key in ButtonSizeType]: number } = {
    BIG: 56,
    NORMAL: 44,
};

export const buttonRadiusTranslate: { [key in ButtonSizeType]: number } = {
    BIG: Variables.mediumBorderRadius,
    NORMAL: Variables.regularBorderRadius,
};
