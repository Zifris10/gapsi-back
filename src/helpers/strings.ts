export const firstLetterUpperCase = (word: string): string => {
    const upperCase = word.charAt(0).toUpperCase() + word.slice(1);
    return upperCase;
};

export const trimStrings = (word: string): string => {
    const trimWord = word.trim();
    return trimWord;
};