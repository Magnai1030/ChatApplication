import { ApolloError, gql, useLazyQuery } from '@apollo/client';
import { MessageI } from '@constants/Types';
import { messagesNormalize } from '@services/Helper';
import { useState, useEffect } from 'react';

const MORE_MESSAGES_QUERY = gql`
    query GetMesssages(
        $channelId: String!
        $messageId: String!
        $old: Boolean!
    ) {
        fetchMoreMessages(
            channelId: $channelId
            messageId: $messageId
            old: $old
        ) {
            messageId
            text
            datetime
            userId
        }
    }
`;

export const useGetMoreMessages = (userId: string): any => {
    const [getMoreMessage, { loading: moreLoading, data, error: moreError }] =
        useLazyQuery(MORE_MESSAGES_QUERY);
    const [moreResult, setMoreResult] = useState<MessageI[]>([]);

    useEffect(() => {
        if (data && data.fetchMoreMessages) {
            const formatedMessages = messagesNormalize(
                data.fetchMoreMessages,
                userId as string,
            );
            setMoreResult(formatedMessages);
        }
    }, [data]);

    return [getMoreMessage, moreResult, moreLoading, moreError];
};
