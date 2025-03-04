function findPrimes(n: number): string[] { 
    let numberArr: string[] = [];
    let i = 1;
    while (i <= n) {
        if (i <= 1) numberArr.push(i.toString())
        else if (i === 2 || i === 3) numberArr.push('prime')
        else if (i % 2 === 0 || i % 3 === 0) numberArr.push(i.toString())
        else {
        // 6k+-1
        }
        i++;
    }
    return numberArr;
}

console.log(findPrimes(150));