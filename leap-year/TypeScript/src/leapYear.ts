export const isLeapYear = (year: number): boolean => {
    // check if the year is less than or equal to 0
    if (year < 1) {
        return false;
    }

    // check if the year is divisible by 4 but not divisible by 100
    if ((year % 4) === 0 && (year % 100) !== 0) {
        return true;
    }

    // -- OR --

    // check if the year is divisible by 400
    if ((year % 400) === 0) {
        return true;
    }

    // if none of the conditions are met, it's not a leap year
    return false;
}
