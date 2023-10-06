function collatz() {
    let currentNumber = (new Array(100001)).fill('1')
    steps = 0;
    console.log("number", currentNumber)
    while (currentNumber.filter(x => x === '1').length > 1) {
        // while (steps < 10) {
        let oldNumber = [...currentNumber] // 10001
        let resto = '0'
        if (currentNumber[0] === '1') {
            currentNumber.unshift('0') //010001
            // console.log("per two", currentNumber)
            // console.log("old number", oldNumber)
            for (let i = 0; i < oldNumber.length; i++) {
                // console.log("here", oldNumber[i], currentNumber[i])
                if (oldNumber[i] === '0' && currentNumber[i] === '0') {
                    if (resto === '1') {
                        currentNumber[i] = '1'
                        resto = '0'
                    } else {
                        currentNumber[i] = '0' //110011
                    }
                }
                else if (oldNumber[i] === '1' && currentNumber[i] === '0' || oldNumber[i] === '0' && currentNumber[i] === '1') {
                    if (resto === '1') {
                        currentNumber[i] = '0' //11
                    } else {
                        currentNumber[i] = '1' 
                    }
                } else {
                    if (resto === '1') {
                        currentNumber[i] = '1'
                    } else {
                        currentNumber[i] = '0'
                    }
                    resto = '1'
                }
                // console.log(currentNumber, "step")
            }
             //110011
            if (resto === '1') {
                currentNumber[currentNumber.length - 1] = '0'
                currentNumber.push('1')
            }
            // console.log("per three", currentNumber)
            // console.log(currentNumber)
            let firstZeroIndex = currentNumber.indexOf('0') //2
            if (firstZeroIndex > 0) {
                for (let j = 0; j < firstZeroIndex; j++) {
                    currentNumber[j] = '0' //0, 010011 //1, 000011
                    // console.log(currentNumber, "plus one")
                }
                currentNumber[firstZeroIndex] = '1' //001011
            } else {
                for (let j = 1; j < currentNumber.length; j++) {
                    currentNumber[j] = '0'
                }
                currentNumber.push('1')
            }
            currentNumber[0] = '0'
        } else {
            currentNumber.shift()
        }
        steps += 1
        console.log("step", steps, "number bit length", currentNumber.length)
    }
    console.log("FINISHED! Total steps", steps + currentNumber.length - 1)
}

collatz();