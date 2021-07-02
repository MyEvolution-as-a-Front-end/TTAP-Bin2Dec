import bin2dec from './bin2dec'

describe('bin2dec', () => {
  it('should exists', () => {
    expect(bin2dec).toBeDefined()
  })

  it('should convert a binary number to decimal', () => {
    expect(bin2dec('101')).toBe(5)
  })
})
