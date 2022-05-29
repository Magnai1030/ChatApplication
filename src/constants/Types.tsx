import React from 'react';

import Colors from './Colors';
import CheckIcon from '@icons/ic_check.svg';
import ErrorIcon from '@icons/ic_error.svg';

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
    LOADING: <ErrorIcon />,
};
