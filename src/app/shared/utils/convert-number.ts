
export function safeStringToNumber(str: string): number | undefined {
    const num = Number(str);
    return isNaN(num) ? undefined : num;
}