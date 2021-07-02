function bin2dec(binary) {
  let binaryToString = binary.toString()
  let result = 0
  for (let i = 0; i < binaryToString.length; i++) {
    result = result * 2 + binaryToString.charCodeAt(i) - 48
  }
  return result
}

module.exports = bin2dec
