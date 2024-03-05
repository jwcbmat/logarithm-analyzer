// example use with process

// process.stdout.write("avocado")
//
// process.stdin.on('data', (input) => {
//    console.log(input)
// })

class Logarithm {
  base
  arg
  
  /**
  * @constructor
  * @param {number} base
  * @param {number} arg
  */
  constructor(base, arg) {
    if (isNaN(base) || isNaN(arg)) {
      console.error('Params should be a number')
      process.exit(1)
    }

    this.base = base
    this.arg = arg
  }
  
  format() {
    const baseUnicode = {
      2: '\u2082',
      3: '\u2083',
      4: '\u2084',
      5: '\u2085',
      6: '\u2086',
      7: '\u2087',
      8: '\u2088',
      9: '\u2089',
      10: '\u2081\u2080'
    }

    const code = baseUnicode[this.base] || ''

    return `log${code}(${this.arg})`
  }

}

console.log(new Logarithm(10, 3).format())
