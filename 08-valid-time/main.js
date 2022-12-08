function validTime(str) {
  //  write code here.
  let isValidHour = false;
  let isValidMinute = false;
  const [hourString, minuteString] = str.split(':');
  const hourValue = parseInt(hourString);
  const minuteValue = parseInt(minuteString);

  if (hourValue >= 0 && minuteValue >= 0) {
    if (hourValue <= 23) isValidHour = true;
    if (minuteValue <= 59) isValidMinute = true;
    if (isValidHour && isValidMinute) return true;

    return false;
  }
}

/**
 * Test Suite
 */
describe('validTime()', () => {
  it('returns true for valid time', () => {
    // arrange
    const str = '13:58';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
    // arrange
    const str = '25:51';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
    // arrange
    const str = '02:76';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });
});
