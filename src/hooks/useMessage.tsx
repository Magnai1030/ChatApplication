import { gql, useQuery, useMutation } from '@apollo/client';
import { MessageI } from '@constants/Types';
import { messagesNormalize } from '@services/Helper';
import { useState, useEffect } from 'react';

const MESSAGES_QUERY = gql`
    query GetMesssages($channelId: String!) {
        fetchLatestMessages(channelId: $channelId) {
            messageId
            text
            datetime
            userId
        }
    }
`;

const MESSAGE_MUTATION = gql`
    mutation postMessage(
        $channelId: String!
        $text: String!
        $userId: String!
    ) {
        postMessage(channelId: $channelId, text: $text, userId: $userId) {
            messageId
            text
            userId
        }
    }
`;

export const useMessage = (userId: string, channelId: string): any => {
    const [result, setResult] = useState<MessageI[]>([]);
    const { data, loading, error } = useQuery(MESSAGES_QUERY, {
        variables: { channelId: channelId },
    });
    const [
        postMessage,
        { data: sendData, loading: sendLoading, error: sendError },
    ] = useMutation(MESSAGE_MUTATION, {
        update(cache, { data: { postMessage } }) {
            cache.modify({
                fields: {
                    formatedMessages(existingFormatedMessages = []) {
                        const newPostRef = cache.writeFragment({
                            data: postMessage,
                            fragment: gql`
                                fragment NewMessage on Message {
                                    messageId
                                    text
                                    userId
                                }
                            `,
                        });
                        return [...existingFormatedMessages, newPostRef];
                    },
                },
            });
        },
        refetchQueries: () => [
            loading,
            data,
            error,
            {
                query: MESSAGES_QUERY,
                variables: { channelId: channelId },
            },
        ],
    });
    useEffect(() => {
        if (data && data.fetchLatestMessages) {
            const formatedMessages = messagesNormalize(
                data.fetchLatestMessages,
                userId as string,
            );
            setResult(formatedMessages);
        }
    }, [data]);
    useEffect(() => {
        console.log(loading);
    }, [loading]);
    return [
        result,
        loading,
        error,
        postMessage,
        sendData,
        sendLoading,
        sendError,
    ];
};

export default useMessage;
