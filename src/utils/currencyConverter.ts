export const convertPrice = (price: number, currency: string, rates: Record<string, number>): string => {
    const rate = rates[currency] || 1;
    return (price * rate).toFixed(2);
};
