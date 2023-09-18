export const sieveEratosthenes = (limit) => {
    if (limit < 2)
        return [];
    const primes = [2];
    const isComposite = Array(limit + 1).fill(false);
    for (let num = 3; num <= limit; num += 2) {
        if (!isComposite[num]) {
            primes.push(num);
            for (let multiple = num * num; multiple <= limit; multiple += num * 2) {
                isComposite[multiple] = true;
            }
        }
    }
    return primes;
};
