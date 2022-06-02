import { MessageI, MessageStatus } from '@constants/Types';

export const normalizeDate = (string: string | number): string => {
    return String('0' + string).slice(-2);
};

export const formatToHour = (dateString: string): string => {
    const date = new Date(dateString);

    return `${normalizeDate(date.getHours())}:${normalizeDate(
        date.getMinutes(),
    )}`;
};
export const messagesNormalize = (
    messages: MessageI[] | undefined,
    userId: string,
): MessageI[] => {
    if (!messages) {
        return [];
    }
    const tempData: MessageI[] = JSON.parse(JSON.stringify(messages));
    for (let index = 0; index < tempData.length; index++) {
        const element = tempData[index];
        if (element.userId == userId) {
            element.isMe = true;
            element.status = MessageStatus.SUCCESS;
        }
    }
    const sortedMessages = tempData.sort(
        (a, b) => Date.parse(a.datetime) - Date.parse(b.datetime),
    );
    return sortedMessages;
};
