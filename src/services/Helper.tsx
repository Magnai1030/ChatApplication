export const normalizeDate = (string: string | number): string => {
    return String('0' + string).slice(-2);
};

export const formatToHour = (dateString: string): string => {
    const date = new Date(dateString);

    return `${normalizeDate(date.getHours())}:${normalizeDate(
        date.getMinutes(),
    )}`;
};
