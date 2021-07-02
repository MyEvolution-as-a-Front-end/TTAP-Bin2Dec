function bin2dec(binary) {
  let result = 0
  for (let i = 0; i < binary.length; i++) {
    result = result * 2 + binary.charCodeAt(i) - 48
  }
  return result
}

module.exports = bin2dec
