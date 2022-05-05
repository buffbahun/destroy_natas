let base64Data = Buffer.from(process.argv[2], 'hex').toString().split('').reverse().join('')

let strData = Buffer.from(base64Data, 'base64').toString()

console.log(strData)
