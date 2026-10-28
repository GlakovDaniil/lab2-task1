export function romanToInteger(str) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        let currentVal = romanMap[str[i]];
        let nextVal = romanMap[str[i + 1]];

        if (nextVal && nextVal > currentVal) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }

    return result;
}
