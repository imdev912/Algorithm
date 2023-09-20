import { sieveEratosthenes } from "./sieveEratosthenes.js";

(() => {
    const primes = sieveEratosthenes(100);
    console.log(primes);
})();