function findPrimes(n: number): string[] { 
    let numberArr: string[] = [];
    let i = 1;
    while (i <= n) {
        if (i <= 1) numberArr.push(i.toString())
        else if (i === 2 || i === 3) numberArr.push('prime')
        else if (i % 2 === 0 || i % 3 === 0) numberArr.push(i.toString())
        else {
            const limit = Math.floor(Math.sqrt(i));
            let isPrime = true;
            for (let j = 5; j <= limit; j += 6) { 
                if (i % j === 0 || i % (j + 2) === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                numberArr.push('prime');
            } else { 
                numberArr.push(i.toString());
            }

        } 
        i++;
    }
    return numberArr;
}

console.log(findPrimes(150));